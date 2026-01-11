import { test, expect } from "@playwright/test";

test.describe("Homepage - Open Source Contributions Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should display Open Source Contributions section", async ({ page }) => {
    const openSourceSection = page.getByTestId("open-source-section");
    await expect(openSourceSection).toBeVisible();

    const sectionHeading = page.getByRole("heading", { name: "Open Source Contributions", level: 2 });
    await expect(sectionHeading).toBeVisible();
  });

  test("should display section description", async ({ page }) => {
    const description = page.getByTestId("open-source-description");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Contributing to the developer community");
  });

  test("should display Slate.js contribution", async ({ page }) => {
    const slateCard = page.getByTestId("open-source-card-slate-js");
    await expect(slateCard).toBeVisible();
    
    const contribution = slateCard.getByRole("heading", { name: "Slate.js", level: 3 });
    await expect(contribution).toBeVisible();
    
    const description = slateCard.getByTestId("open-source-description-slate-js");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Contributed fixes to Slate.js");
  });

  test("should display stars count for Slate.js", async ({ page }) => {
    const slateCard = page.getByTestId("open-source-card-slate-js");
    const stars = slateCard.getByTestId("open-source-stars-slate-js");
    await expect(stars).toBeVisible();
    await expect(stars).toContainText("30k+");
  });

  test("should have correct link for Slate.js", async ({ page }) => {
    const slateCard = page.getByTestId("open-source-card-slate-js");
    await expect(slateCard).toHaveAttribute("href", "https://github.com/ianstormtaylor/slate/pulls?q=is%3Apr+author%3Ahiteshshetty-dev");
  });

  test("should display Stylex contribution", async ({ page }) => {
    const stylexCard = page.getByTestId("open-source-card-stylex");
    await expect(stylexCard).toBeVisible();
    
    const contribution = stylexCard.getByRole("heading", { name: "Stylex", level: 3 });
    await expect(contribution).toBeVisible();
  });

  test("should display stars count for Stylex", async ({ page }) => {
    const stylexCard = page.getByTestId("open-source-card-stylex");
    const stars = stylexCard.getByTestId("open-source-stars-stylex");
    await expect(stars).toBeVisible();
    await expect(stars).toContainText("8k+");
  });

  test("should have correct link for Stylex", async ({ page }) => {
    const stylexCard = page.getByTestId("open-source-card-stylex");
    await expect(stylexCard).toHaveAttribute("href", "https://github.com/facebook/stylex/pulls?q=is%3Apr+author%3Ahiteshshetty-dev");
  });

  test("should display Offline Detector as open source project", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("open-source-card-offline-detector");
    await expect(offlineDetectorCard).toBeVisible();
    
    const project = offlineDetectorCard.getByRole("heading", { name: "Offline Detector", level: 3 });
    await expect(project).toBeVisible();
    
    const description = offlineDetectorCard.getByTestId("open-source-description-offline-detector");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Open-source package for reliable offline");
  });

  test("should display contributions for Offline Detector", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("open-source-card-offline-detector");
    const contributions = offlineDetectorCard.getByTestId("open-source-contributions-offline-detector");
    await expect(contributions).toBeVisible();
    await expect(contributions).toContainText("Author & Maintainer");
  });

  test("should have correct link for Offline Detector", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("open-source-card-offline-detector");
    await expect(offlineDetectorCard).toHaveAttribute("href", "https://github.com/hiteshshetty-dev/offline-detector");
  });

  test("should have GitHub profile link", async ({ page }) => {
    const githubProfileLink = page.getByTestId("open-source-github-profile-link");
    await expect(githubProfileLink).toBeVisible();
    await expect(githubProfileLink).toHaveAttribute("href", "https://github.com/hiteshshetty-dev");
  });
});
