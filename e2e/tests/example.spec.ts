import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Hitesh Shetty/);
  });

  test("should have visible content", async ({ page }) => {
    await page.goto("/");
    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");
    // Check that the page has some content
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });
});
