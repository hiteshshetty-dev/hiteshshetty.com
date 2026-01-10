import { test, expect } from "@playwright/test";

test.describe("Homepage - Professional Experience Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should display Professional Experience section", async ({ page }) => {
    const experienceSection = page.getByTestId("professional-experience-section");
    await expect(experienceSection).toBeVisible();

    const sectionHeading = page.getByRole("heading", { name: "Professional Experience", level: 2 });
    await expect(sectionHeading).toBeVisible();
  });

  test("should display section description", async ({ page }) => {
    const description = page.locator("text=My journey in software engineering");
    await expect(description).toBeVisible();
  });

  test("should display Contentstack company information", async ({ page }) => {
    const companyHeading = page.getByRole("heading", { name: "Contentstack", level: 3 });
    await expect(companyHeading).toBeVisible();
    
    const location = page.locator("text=Virar, India");
    await expect(location).toBeVisible();
  });


  test("should expand to show additional roles when clicked", async ({ page }) => {
    const expandButton = page.getByTestId("experience-expand-button");
    await expect(expandButton).toBeVisible();
    await expandButton.click();
    
    // Wait for expanded content
    await page.waitForTimeout(500);
    
    // Check for additional roles
    await expect(page.getByRole("heading", { name: "Software Engineer 2", level: 4, exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Associate Software Engineer", level: 4 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fullstack Consultant", level: 4 })).toBeVisible();
  });
});
