import { test, expect } from "@playwright/test";

test.describe("Projects Page - External Links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects");
    await page.waitForLoadState("networkidle");
  });

  test("should display GitHub link for projects with GitHub repository", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("project-card-offline-detector");

    const githubLink = offlineDetectorCard.getByTestId("project-github-link-offline-detector");
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/hiteshshetty-dev/offline-detector"
    );
    await expect(githubLink).toHaveAttribute("target", "_blank");
    await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display Demo link for projects with demo URL", async ({ page }) => {
    const virtualIGCard = page.getByTestId("project-card-virtual-ig");

    const demoLink = virtualIGCard.getByTestId("project-demo-link-virtual-ig");
    await expect(demoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute("href", "https://virtual-ig-ui.vercel.app/#/");
    await expect(demoLink).toHaveAttribute("target", "_blank");
    await expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display NPM link for projects with NPM package", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("project-card-offline-detector");

    const npmLink = offlineDetectorCard.getByTestId("project-npm-link-offline-detector");
    await expect(npmLink).toBeVisible();
    await expect(npmLink).toHaveAttribute(
      "href",
      "https://www.npmjs.com/package/offline-detector"
    );
    await expect(npmLink).toHaveAttribute("target", "_blank");
    await expect(npmLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display all links for Offline Detector project", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("project-card-offline-detector");

    const githubLink = offlineDetectorCard.getByTestId("project-github-link-offline-detector");
    await expect(githubLink).toBeVisible();

    const demoLink = offlineDetectorCard.getByTestId("project-demo-link-offline-detector");
    await expect(demoLink).toBeVisible();

    const npmLink = offlineDetectorCard.getByTestId("project-npm-link-offline-detector");
    await expect(npmLink).toBeVisible();
  });

  test("should display modal links when project modal is open", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("project-card-offline-detector");
    const viewDetailsButton = offlineDetectorCard.getByRole("button", {
      name: "View project details",
    });

    await viewDetailsButton.click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();

    // Check for View Code button (GitHub link)
    const viewCodeLink = modal.getByRole("link", { name: "View Code" });
    await expect(viewCodeLink).toBeVisible();
    await expect(viewCodeLink).toHaveAttribute(
      "href",
      "https://github.com/hiteshshetty-dev/offline-detector"
    );
    await expect(viewCodeLink).toHaveAttribute("target", "_blank");
    await expect(viewCodeLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check for Live Demo button
    const liveDemoLink = modal.getByRole("link", { name: "Live Demo" });
    await expect(liveDemoLink).toBeVisible();
    await expect(liveDemoLink).toHaveAttribute(
      "href",
      "https://hiteshshetty-dev.github.io/offline-detector/"
    );
    await expect(liveDemoLink).toHaveAttribute("target", "_blank");
    await expect(liveDemoLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check for NPM Package button
    const npmPackageLink = modal.getByRole("link", { name: "NPM Package" });
    await expect(npmPackageLink).toBeVisible();
    await expect(npmPackageLink).toHaveAttribute(
      "href",
      "https://www.npmjs.com/package/offline-detector"
    );
    await expect(npmPackageLink).toHaveAttribute("target", "_blank");
    await expect(npmPackageLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display modal links for Virtual IG project", async ({ page }) => {
    const virtualIGCard = page.getByTestId("project-card-virtual-ig");
    const viewDetailsButton = virtualIGCard.getByRole("button", {
      name: "View project details",
    });

    await viewDetailsButton.click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();

    // Virtual IG only has demo link
    const liveDemoLink = modal.getByRole("link", { name: "Live Demo" });
    await expect(liveDemoLink).toBeVisible();
    await expect(liveDemoLink).toHaveAttribute("href", "https://virtual-ig-ui.vercel.app/#/");
  });

  test("should display GitHub profile link in Open Source section", async ({ page }) => {
    const githubProfileLink = page.getByRole("link", { name: /GitHub profile/i });
    await expect(githubProfileLink).toBeVisible();
    await expect(githubProfileLink).toHaveAttribute(
      "href",
      "https://github.com/hiteshshetty-dev"
    );
    await expect(githubProfileLink).toHaveAttribute("target", "_blank");
    await expect(githubProfileLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
