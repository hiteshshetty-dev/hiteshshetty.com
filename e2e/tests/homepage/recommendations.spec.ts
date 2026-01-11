import { test, expect } from "@playwright/test";

test.describe("Homepage - LinkedIn Recommendations Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should display LinkedIn Recommendations section", async ({ page }) => {
    const recommendationsSection = page.getByTestId("recommendations-section");
    await expect(recommendationsSection).toBeVisible();

    const sectionHeading = page.getByRole("heading", { name: "LinkedIn Recommendations", level: 2 });
    await expect(sectionHeading).toBeVisible();
  });

  test("should display section description", async ({ page }) => {
    const description = page.getByTestId("recommendations-description");
    await expect(description).toBeVisible();
    await expect(description).toContainText("What colleagues and peers say about working with me");
  });

  test("should display all recommendations", async ({ page }) => {
    const raviCard = page.getByTestId("recommendation-card-rec-001");
    await expect(raviCard).toBeVisible();

    const deepakCard = page.getByTestId("recommendation-card-rec-002");
    await expect(deepakCard).toBeVisible();

    const faraazCard = page.getByTestId("recommendation-card-rec-003");
    await expect(faraazCard).toBeVisible();
  });

  test("should display Ravi Lamkoti's recommendation", async ({ page }) => {
    const raviCard = page.getByTestId("recommendation-card-rec-001");
    await expect(raviCard).toBeVisible();
    
    const recommendationText = page.getByTestId("recommendation-text-rec-001");
    await expect(recommendationText).toBeVisible();
    await expect(recommendationText).toContainText("I've been working with Hitesh right from college days");
    
    const name = page.getByRole("heading", { name: "Ravi Lamkoti", level: 3 });
    await expect(name).toBeVisible();
    
    const title = page.getByTestId("recommendation-title-rec-001");
    await expect(title).toBeVisible();
    await expect(title).toContainText("SWE III @ Google");
  });

  test("should have correct LinkedIn link for Ravi Lamkoti", async ({ page }) => {
    const linkedinLink = page.getByTestId("recommendation-linkedin-link-rec-001");
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/ravi-lamkoti");
  });

  test("should display Deepak Kharah's recommendation", async ({ page }) => {
    const deepakCard = page.getByTestId("recommendation-card-rec-002");
    await expect(deepakCard).toBeVisible();
    
    const recommendationText = page.getByTestId("recommendation-text-rec-002");
    await expect(recommendationText).toBeVisible();
    await expect(recommendationText).toContainText("Hitesh and I started our career together in 2020");
    
    const name = page.getByRole("heading", { name: "Deepak Kharah", level: 3 });
    await expect(name).toBeVisible();
    
    const title = page.getByTestId("recommendation-title-rec-002");
    await expect(title).toBeVisible();
    await expect(title).toContainText("Senior Engineer II @ Contentstack");
  });

  test("should have correct LinkedIn link for Deepak Kharah", async ({ page }) => {
    const linkedinLink = page.getByTestId("recommendation-linkedin-link-rec-002");
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/deepakkharah");
  });

  test("should display Faraaz Biyabani's recommendation", async ({ page }) => {
    const faraazCard = page.getByTestId("recommendation-card-rec-003");
    await expect(faraazCard).toBeVisible();
    
    const recommendationText = page.getByTestId("recommendation-text-rec-003");
    await expect(recommendationText).toBeVisible();
    await expect(recommendationText).toContainText("I had the privilege of working with Hitesh for two years");
    
    const name = page.getByRole("heading", { name: "Faraaz Biyabani", level: 3 });
    await expect(name).toBeVisible();
    
    const title = page.getByTestId("recommendation-title-rec-003");
    await expect(title).toBeVisible();
    await expect(title).toContainText("Software Engineer I @ Contentstack");
  });

  test("should have correct LinkedIn link for Faraaz Biyabani", async ({ page }) => {
    const linkedinLink = page.getByTestId("recommendation-linkedin-link-rec-003");
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/faraazb");
  });

  test("should display profile images for all recommenders", async ({ page }) => {
    const raviImage = page.getByTestId("recommendation-profile-image-rec-001");
    await expect(raviImage).toBeVisible();

    const deepakImage = page.getByTestId("recommendation-profile-image-rec-002");
    await expect(deepakImage).toBeVisible();

    const faraazImage = page.getByTestId("recommendation-profile-image-rec-003");
    await expect(faraazImage).toBeVisible();
  });
});
