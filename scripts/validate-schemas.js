const fs = require("node:fs");
const path = require("node:path");
const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const DATA_DIR = path.join(__dirname, "../src/data");
const SCHEMA_DIR = path.join(__dirname, "../src/schema");

const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: false,
});
addFormats(ajv);

/**
 * Get all JSON files in a directory
 */
function getJsonFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => path.join(dir, file));
}

/**
 * Load and parse JSON file
 */
function loadJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to parse JSON file ${filePath}: ${error.message}`);
  }
}

/**
 * Find corresponding schema file
 */
function findSchemaFile(dataFile) {
  const fileName = path.basename(dataFile);
  const schemaFile = path.join(SCHEMA_DIR, fileName);

  if (!fs.existsSync(schemaFile)) {
    console.warn(`⚠️  No schema found for ${fileName}`);
    return null;
  }

  return schemaFile;
}

/**
 * Validate a single data file against its schema
 */
function validateFile(dataFile, schemaFile) {
  const fileName = path.basename(dataFile);
  console.log(`\n🔍 Validating ${fileName}...`);

  try {
    // Load data and schema
    const data = loadJson(dataFile);
    const schema = loadJson(schemaFile);

    // Compile schema
    const validate = ajv.compile(schema);

    // Validate data
    const valid = validate(data);

    if (valid) {
      console.log(`✅ ${fileName} is valid`);
      return { valid: true, errors: [] };
    } else {
      console.log(`❌ ${fileName} has validation errors:`);
      validate.errors.forEach((error, index) => {
        console.log(
          `   ${index + 1}. ${error.instancePath || "root"}: ${error.message}`,
        );
        if (error.schemaPath) {
          console.log(`      Schema: ${error.schemaPath}`);
        }
      });
      return { valid: false, errors: validate.errors };
    }
  } catch (error) {
    console.log(`💥 Error validating ${fileName}: ${error.message}`);
    return { valid: false, errors: [{ message: error.message }] };
  }
}

function validateAll() {
  const dataFiles = getJsonFiles(DATA_DIR);
  const results = [];
  let hasErrors = false;

  for (const dataFile of dataFiles) {
    const schemaFile = findSchemaFile(dataFile);

    if (schemaFile) {
      const result = validateFile(dataFile, schemaFile);
      results.push({
        file: path.basename(dataFile),
        ...result,
      });

      if (!result.valid) {
        hasErrors = true;
      }
    } else {
      results.push({
        file: path.basename(dataFile),
        valid: true,
        errors: [],
        skipped: true,
      });
    }
  }

  // Summary
  console.log("\n📊 Validation Summary:");
  console.log("=".repeat(50));

  const validCount = results.filter((r) => r.valid && !r.skipped).length;
  const errorCount = results.filter((r) => !r.valid).length;
  const skippedCount = results.filter((r) => r.skipped).length;

  console.log(`✅ Valid files: ${validCount}`);
  console.log(`❌ Files with errors: ${errorCount}`);
  console.log(`⚠️  Files without schemas: ${skippedCount}`);
  console.log(`📁 Total files processed: ${results.length}`);

  if (hasErrors) {
    console.log("\n💥 Validation failed! Please fix the errors above. 💥 \n");
    process.exit(1);
  } else {
    console.log("\n🎉 All validations passed! 🎉 \n");
    process.exit(0);
  }
}

if (require.main === module) {
  validateAll();
}

module.exports = { validateAll, validateFile };
