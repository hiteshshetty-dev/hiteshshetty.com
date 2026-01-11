import { test, expect } from "@playwright/test";

test.describe("Homepage - Featured Projects Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should display Featured Projects section", async ({ page }) => {
    const featuredProjectsSection = page.getByTestId("featured-projects-section");
    await expect(featuredProjectsSection).toBeVisible();

    const sectionHeading = page.getByRole("heading", { name: "Featured Projects", level: 2 });
    await expect(sectionHeading).toBeVisible();
  });

  test("should display section description", async ({ page }) => {
    const description = page.getByTestId("featured-projects-description");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Showcase of my work in building scalable platforms");
  });

  test("should display Virtual IG project", async ({ page }) => {
    const virtualIGCard = page.getByTestId("project-card-virtual-ig");
    await expect(virtualIGCard).toBeVisible();
    
    const projectHeading = page.getByRole("heading", { name: "Virtual IG", level: 3 });
    await expect(projectHeading).toBeVisible();
    
    const projectType = page.getByTestId("project-type-tag-virtual-ig");
    await expect(projectType).toBeVisible();
    await expect(projectType).toContainText("Personal");
    
    const subtitle = page.getByTestId("project-subtitle-virtual-ig");
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText("Real-time Interview Platform");
  });

  test("should have Demo link for Virtual IG project", async ({ page }) => {
    const demoLink = page.getByTestId("project-demo-link-virtual-ig");
    await expect(demoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute("href", /virtual-ig-ui\.vercel\.app/);
  });

  test("should display Offline Detector project", async ({ page }) => {
    const offlineDetectorCard = page.getByTestId("project-card-offline-detector");
    await expect(offlineDetectorCard).toBeVisible();
    
    const projectHeading = page.getByRole("heading", { name: "Offline Detector", level: 3 });
    await expect(projectHeading).toBeVisible();
    
    const subtitle = page.getByTestId("project-subtitle-offline-detector");
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText("Open Source NPM Package");
  });

  test("should have GitHub, Demo, and npm links for Offline Detector", async ({ page }) => {
    const githubLink = page.getByTestId("project-github-link-offline-detector");
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute("href", "https://github.com/hiteshshetty-dev/offline-detector");

    const demoLink = page.getByTestId("project-demo-link-offline-detector");
    await expect(demoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute("href", "https://hiteshshetty-dev.github.io/offline-detector/");

    const npmLink = page.getByTestId("project-npm-link-offline-detector");
    await expect(npmLink).toBeVisible();
    await expect(npmLink).toHaveAttribute("href", "https://www.npmjs.com/package/offline-detector");
  });

  test("should display Visual Editing Platform project", async ({ page }) => {
    const visualEditingCard = page.getByTestId("project-card-visual-editing-platform");
    await expect(visualEditingCard).toBeVisible();
    
    const projectHeading = page.getByRole("heading", { name: "Visual Editing Platform", level: 3 });
    await expect(projectHeading).toBeVisible();
    
    const projectType = page.getByTestId("project-type-tag-visual-editing-platform");
    await expect(projectType).toBeVisible();
    await expect(projectType).toContainText("Professional");
    
    const companyTag = page.getByTestId("project-company-tag-visual-editing-platform");
    await expect(companyTag).toBeVisible();
    await expect(companyTag).toContainText("@ Contentstack");
  });

  test("should display JSON Rich Text Editor project", async ({ page }) => {
    const jsonRTECard = page.getByTestId("project-card-json-rich-text-editor");
    await expect(jsonRTECard).toBeVisible();
    
    const projectHeading = page.getByRole("heading", { name: "JSON Rich Text Editor", level: 3 });
    await expect(projectHeading).toBeVisible();
  });

  test("should have 'View All Projects' link", async ({ page }) => {
    const viewAllLink = page.getByTestId("featured-projects-view-all-link");
    await expect(viewAllLink).toBeVisible();
    await expect(viewAllLink).toHaveAttribute("href", "/projects");
  });
});
