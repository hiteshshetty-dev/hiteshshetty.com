import { test, expect } from "@playwright/test";

// Viewport configurations
const viewports = [
  { name: "mobile-small", width: 375, height: 667 },
  { name: "mobile-large", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "tablet-large", width: 820, height: 1180 },
  { name: "desktop", width: 1280, height: 720 },
  { name: "desktop-large", width: 1920, height: 1080 },
];

// Helper function to scroll to a section by testid
async function scrollToSection(page: any, testId: string) {
  const section = page.locator(`[data-testid="${testId}"]`).first();
  await section.scrollIntoViewIfNeeded();
  return section;
}

// Helper function to scroll to Skills section (no testid)
async function scrollToSkillsSection(page: any) {
  const section = page.locator('section:has-text("Skills & Technologies")').first();
  await section.scrollIntoViewIfNeeded();
  return section;
}


// Helper function to get grid column count
async function getGridColumnCount(page: any, gridSelector: any): Promise<number> {
  const gridTemplateColumns = await gridSelector.evaluate(
    (el: Element) => window.getComputedStyle(el).gridTemplateColumns
  );
  return gridTemplateColumns.split(" ").length;
}

// Helper function to verify text alignment
async function verifyTextAlign(page: any, selector: any, expectedAlign: string) {
  const textAlign = await selector.evaluate(
    (el: Element) => window.getComputedStyle(el).textAlign
  );
  expect(textAlign).toBe(expectedAlign);
}

test.describe("Homepage - Responsive Design", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  viewports.forEach(({ name, width, height }) => {
    test.describe(`${name} (${width}x${height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width, height });
        // Wait for header to be visible and layout to settle
        await page.locator('[data-testid="header"]').waitFor({ state: "visible" });
      });

      // Navigation Tests
      test("should display correct navigation layout", async ({ page }) => {
        const hamburger = page.locator('button[aria-label="Toggle menu"]');
        const desktopNavLink = page.locator('[data-testid="header-nav-link-projects"]');
        const mobileNavLink = page.locator('[data-testid="header-mobile-nav-link-projects"]');

        if (width < 768) {
          // Mobile: hamburger should be visible
          await expect(hamburger).toBeVisible();
          // Mobile nav links should be hidden initially (menu closed)
          await expect(mobileNavLink).toBeHidden();
        } else {
          // Tablet/Desktop: hamburger should be hidden, nav links visible
          await expect(hamburger).toBeHidden();
          await expect(desktopNavLink).toBeVisible();
        }
      });

      test("should toggle mobile menu on mobile viewports", async ({ page }) => {
        if (width < 768) {
          const hamburger = page.locator('button[aria-label="Toggle menu"]');
          const mobileNavLink = page.locator('[data-testid="header-mobile-nav-link-projects"]');
          const mobileLetsTalkLink = page.locator('[data-testid="header-mobile-lets-talk-link"]');

          // Menu should be initially hidden or collapsed
          await expect(mobileNavLink).toBeHidden();

          // Click hamburger to open
          await hamburger.click();
          // Wait for mobile menu to be visible
          await page.waitForSelector('[data-testid="header-mobile-nav-link-projects"]', { state: "visible" });

          // Verify menu items are accessible after click
          await expect(mobileNavLink).toBeVisible();
          await expect(mobileLetsTalkLink).toBeVisible();

          // Click again to close
          await hamburger.click();
          // Wait for menu to close
          await page.waitForSelector('[data-testid="header-mobile-nav-link-projects"]', { state: "hidden" });
        }
      });

      // Hero Section Tests
      test("should display Hero section with correct layout", async ({ page }) => {
        const heroSection = await scrollToSection(page, "hero-section");
        await expect(heroSection).toBeVisible();

        // Find the main grid container
        const heroGrid = heroSection.locator("div > div").first();
        const columnCount = await getGridColumnCount(page, heroGrid);

        if (width < 1024) {
          // Mobile and Tablet: 1 column
          expect(columnCount).toBe(1);
        } else {
          // Desktop: 2 columns
          expect(columnCount).toBe(2);
        }
      });

      test("should have correct flex direction in Experience section", async ({
        page,
      }) => {
        const experienceSection = await scrollToSection(
          page,
          "professional-experience-section"
        );

        // Find role card header with flex layout
        const roleCard = experienceSection
          .locator('[class*="flex-col"]')
          .or(experienceSection.locator('[class*="flex-row"]'))
          .first();

        if (roleCard) {
          const flexDirection = await roleCard.evaluate(
            (el: Element) => window.getComputedStyle(el).flexDirection
          );

          if (width < 768) {
            expect(flexDirection).toBe("column");
          } else {
            expect(flexDirection).toBe("row");
          }
        }
      });

      // Featured Projects Section Tests
      test("should display Featured Projects with correct grid layout", async ({
        page,
      }) => {
        const projectsSection = await scrollToSection(
          page,
          "featured-projects-section"
        );
        await expect(projectsSection).toBeVisible();

        const projectsGrid = projectsSection.locator('[class*="grid"]').first();
        const columnCount = await getGridColumnCount(page, projectsGrid);

        if (width < 768) {
          // Mobile: 1 column
          expect(columnCount).toBe(1);
        } else if (width < 1024) {
          // Tablet: 2 columns
          expect(columnCount).toBe(2);
        } else {
          // Desktop: 3 columns
          expect(columnCount).toBe(3);
        }
      });

      // Open Source Section Tests
      test("should display Open Source section with correct grid layout", async ({
        page,
      }) => {
        const openSourceSection = await scrollToSection(
          page,
          "open-source-section"
        );
        await expect(openSourceSection).toBeVisible();

        const openSourceGrid = openSourceSection
          .locator('[class*="grid"]')
          .first();
        const columnCount = await getGridColumnCount(page, openSourceGrid);

        if (width < 768) {
          // Mobile: 1 column
          expect(columnCount).toBe(1);
        } else if (width < 1024) {
          // Tablet: 2 columns
          expect(columnCount).toBe(2);
        } else {
          // Desktop: 3 columns
          expect(columnCount).toBe(3);
        }
      });

      // Skills Section Tests
      test("should display Skills section with correct category grid layout", async ({
        page,
      }) => {
        const skillsSection = await scrollToSkillsSection(page);
        await expect(skillsSection).toBeVisible();

        // Find the main categories grid
        const categoriesGrid = skillsSection
          .locator('[class*="grid"]')
          .first();
        const columnCount = await getGridColumnCount(page, categoriesGrid);

        if (width < 768) {
          // Mobile: 1 column
          expect(columnCount).toBe(1);
        } else {
          // Tablet and Desktop: 2 columns
          expect(columnCount).toBe(2);
        }
      });

      test("should display Skills section with correct skill icons grid layout", async ({
        page,
      }) => {
        const skillsSection = await scrollToSkillsSection(page);
        await expect(skillsSection).toBeVisible();

        // Find skill icons grid within a category (nested grid)
        // Look for grids that are inside category cards
        const categoryCards = skillsSection.locator('[class*="bg-white"]').or(
          skillsSection.locator('[class*="rounded-2xl"]')
        );
        const firstCategory = categoryCards.first();
        
        if ((await firstCategory.count()) > 0) {
          // Find the grid inside the category card (skill icons grid)
          const skillIconsGrid = firstCategory.locator('[class*="grid"]').first();
          
          if ((await skillIconsGrid.count()) > 0) {
            const columnCount = await getGridColumnCount(page, skillIconsGrid);

            if (width < 640) {
              // Mobile: 2 columns
              expect(columnCount).toBe(2);
            } else {
              // Tablet and Desktop: 3 columns (sm:grid-cols-3)
              expect(columnCount).toBe(3);
            }
          }
        }
      });

      // Recommendations Section Tests
      test("should display Recommendations section with correct grid layout", async ({
        page,
      }) => {
        const recommendationsSection = await scrollToSection(
          page,
          "recommendations-section"
        );
        await expect(recommendationsSection).toBeVisible();

        const recommendationsGrid = recommendationsSection
          .locator('[class*="grid"]')
          .first();
        const columnCount = await getGridColumnCount(page, recommendationsGrid);

        if (width < 768) {
          // Mobile: 1 column
          expect(columnCount).toBe(1);
        } else if (width < 1024) {
          // Tablet: 2 columns
          expect(columnCount).toBe(2);
        } else {
          // Desktop: 3 columns
          expect(columnCount).toBe(3);
        }
      });

      // Achievements Section Tests
      test("should display Achievements section with correct grid layout", async ({
        page,
      }) => {
        const achievementsSection = await scrollToSection(
          page,
          "achievements-section"
        );
        await expect(achievementsSection).toBeVisible();

        const achievementsGrid = achievementsSection
          .locator('[class*="grid"]')
          .first();
        const columnCount = await getGridColumnCount(page, achievementsGrid);

        if (width < 768) {
          // Mobile: 1 column
          expect(columnCount).toBe(1);
        } else if (width < 1024) {
          // Tablet: 2 columns
          expect(columnCount).toBe(2);
        } else {
          // Desktop: 3 columns
          expect(columnCount).toBe(3);
        }
      });

    });
  });
});
