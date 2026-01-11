import { test, expect } from "@playwright/test";

test.describe("Homepage - Achievements & Awards Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should display Achievements & Awards section", async ({ page }) => {
    const achievementsSection = page.getByTestId("achievements-section");
    await expect(achievementsSection).toBeVisible();

    const sectionHeading = page.getByRole("heading", { name: "Achievements & Awards", level: 2 });
    await expect(sectionHeading).toBeVisible();
  });

  test("should display section description", async ({ page }) => {
    const description = page.getByTestId("achievements-description");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Recognition for innovation, security, and technical excellence");
  });

  test("should display Above and Beyond Award", async ({ page }) => {
    const awardCard = page.getByTestId("achievement-card-above-and-beyond-award-3x");
    await expect(awardCard).toBeVisible();
    
    const award = page.getByRole("heading", { name: /Above and Beyond Award/i, level: 3 });
    await expect(award).toBeVisible();
    
    const year = page.getByTestId("achievement-year-above-and-beyond-award-3x");
    await expect(year).toBeVisible();
    await expect(year).toContainText("2023-2025");
    
    const description = page.getByTestId("achievement-description-above-and-beyond-award-3x");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Recognized for exceptional performance");
  });

  test("should display Devfest 2023 award", async ({ page }) => {
    const awardCard = page.getByTestId("achievement-card-winner-of-devfest-2023");
    await expect(awardCard).toBeVisible();
    
    const award = page.getByRole("heading", { name: /Winner of Devfest 2023/i, level: 3 });
    await expect(award).toBeVisible();
    
    const year = page.getByTestId("achievement-year-winner-of-devfest-2023");
    await expect(year).toBeVisible();
    await expect(year).toContainText("2023");
  });

  test("should display Security Bug Bounty 2023 award", async ({ page }) => {
    const awardCard = page.getByTestId("achievement-card-winner-of-security-bug-bounty-2023");
    await expect(awardCard).toBeVisible();
    
    const award = page.getByRole("heading", { name: /Winner of Security Bug Bounty 2023/i, level: 3 });
    await expect(award).toBeVisible();
    
    const year = page.getByTestId("achievement-year-winner-of-security-bug-bounty-2023");
    await expect(year).toBeVisible();
    await expect(year).toContainText("2023");
  });

  test("should display VCET National Level Project Showcase award", async ({ page }) => {
    const awardCard = page.getByTestId("achievement-card-winner-of-vcet-national-level-project-showcase");
    await expect(awardCard).toBeVisible();
    
    const award = page.getByRole("heading", { name: /Winner of VCET National Level Project Showcase/i, level: 3 });
    await expect(award).toBeVisible();
    
    const year = page.getByTestId("achievement-year-winner-of-vcet-national-level-project-showcase");
    await expect(year).toBeVisible();
    await expect(year).toContainText("2021");
  });

  test("should display Elixir Open Source Software Demonstration award", async ({ page }) => {
    const awardCard = page.getByTestId("achievement-card-winner-of-elixir-open-source-software-demonstration");
    await expect(awardCard).toBeVisible();
    
    const award = page.getByRole("heading", { name: /Winner of Elixir Open Source Software Demonstration/i, level: 3 });
    await expect(award).toBeVisible();
    
    const year = page.getByTestId("achievement-year-winner-of-elixir-open-source-software-demonstration");
    await expect(year).toBeVisible();
    await expect(year).toContainText("2020");
  });
});
