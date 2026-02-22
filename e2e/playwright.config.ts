import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Default timeout per test: 10s */
  timeout: 10_000,
  /* Timeout for expect() assertions (e.g. toBeVisible) */
  expect: { timeout: 10_000 },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Start dev server when not in CI; in CI the workflow starts serve. */
  webServer: process.env.CI
    ? undefined
    : {
        command: "npm run build && npx serve out -p 3000",
        cwd: "..",
        url: "http://localhost:3000",
        reuseExistingServer: true,
      },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",

    /* Timeout for actions (click, fill, etc.) and locator operations */
    actionTimeout: 10_000,
    /* Timeout for navigation (e.g. goto) */
    navigationTimeout: 10_000,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Quick mode: run with --project=chromium. Deep mode: run all projects. */
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "iPhone", use: { ...devices["iPhone 15 Pro"] } },
    { name: "Android", use: { ...devices["Pixel 7"] } },
  ],
});
