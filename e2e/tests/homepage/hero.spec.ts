import { test, expect } from "@playwright/test";

test.describe("Homepage - Hero Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should load homepage with correct URL", async ({ page }) => {
    await expect(page).toHaveURL(/\/$/);
    await expect(page).toHaveTitle(/Hitesh Shetty/);
  });

  test("should load profile image successfully", async ({ page }) => {
    const profileImage = page.getByAltText(/Professional headshot of Hitesh Shetty/i);
    await expect(profileImage).toBeVisible();
    
    // Verify image is loaded
    const isLoaded = await profileImage.evaluate((el: HTMLImageElement) => el.complete && el.naturalHeight > 0);
    expect(isLoaded).toBeTruthy();
  });

  test("should have working hero section navigation links", async ({ page }) => {
    // Let's Talk link
    const letsTalkLink = page.getByRole("link", { name: "Let's Talk" }).first();
    await expect(letsTalkLink).toBeVisible();
    await expect(letsTalkLink).toHaveAttribute("href", "https://linkedin.com/in/hiteshshetty-dev");

    // View Resume link
    const resumeLink = page.getByRole("link", { name: "View Resume" });
    await expect(resumeLink).toBeVisible();
    await expect(resumeLink).toHaveAttribute("href", "/documents/resume.pdf");

    // Email link
    const emailLink = page.getByRole("link", { name: "Email" }).first();
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:hitesh.shetty2011@gmail.com");

    // GitHub link
    const githubLink = page.getByRole("link", { name: "GitHub" }).first();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute("href", "https://github.com/hiteshshetty-dev");

    // Codepen link
    const codepenLink = page.getByRole("link", { name: "Codepen" });
    await expect(codepenLink).toBeVisible();
    await expect(codepenLink).toHaveAttribute("href", "https://codepen.io/hiteshshetty-dev");

    // LeetCode link
    const leetcodeLink = page.getByRole("link", { name: "LeetCode" });
    await expect(leetcodeLink).toBeVisible();
    await expect(leetcodeLink).toHaveAttribute("href", "https://leetcode.com/u/hiteshshetty-dev");
  });
});
