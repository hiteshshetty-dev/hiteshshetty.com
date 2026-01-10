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
    const heroSection = page.getByTestId("hero-section");
    await expect(heroSection).toBeVisible();

    const profileImageContainer = page.getByTestId("hero-profile-image");
    await expect(profileImageContainer).toBeVisible();
    
    // Verify image is loaded (check the img element inside the container)
    const profileImage = profileImageContainer.locator("img");
    await expect(profileImage).toBeVisible();
    const isLoaded = await profileImage.evaluate((el: HTMLImageElement) => el.complete && el.naturalHeight > 0);
    expect(isLoaded).toBeTruthy();
  });

  test("should have working hero section navigation links", async ({ page }) => {
    // Let's Talk link
    const letsTalkLink = page.getByTestId("hero-lets-talk-link");
    await expect(letsTalkLink).toBeVisible();
    await expect(letsTalkLink).toHaveAttribute("href", "https://linkedin.com/in/hiteshshetty-dev");

    // View Resume link
    const resumeLink = page.getByTestId("hero-resume-link");
    await expect(resumeLink).toBeVisible();
    await expect(resumeLink).toHaveAttribute("href", "/documents/resume.pdf");

    // Email link
    const emailLink = page.getByTestId("hero-email-link");
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:hitesh.shetty2011@gmail.com");

    // GitHub link
    const githubLink = page.getByTestId("hero-github-link");
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute("href", "https://github.com/hiteshshetty-dev");

    // Codepen link
    const codepenLink = page.getByTestId("hero-codepen-link");
    await expect(codepenLink).toBeVisible();
    await expect(codepenLink).toHaveAttribute("href", "https://codepen.io/hiteshshetty-dev");

    // LeetCode link
    const leetcodeLink = page.getByTestId("hero-leetcode-link");
    await expect(leetcodeLink).toBeVisible();
    await expect(leetcodeLink).toHaveAttribute("href", "https://leetcode.com/u/hiteshshetty-dev");
  });
});
