import { test, expect } from '@playwright/test';

/**
 * Auth Flow Tests
 * - Sign in flow
 * - Protected route redirect
 * - Session persistence
 */

test.describe('Authentication Flow', () => {
  test('redirects unauthenticated user to sign-in page', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForURL('**/sign-in*');
    expect(page.url()).toContain('/sign-in');
  });

  test('sign-in page displays correctly', async ({ page }) => {
    await page.goto('/sign-in');
    
    // Check for sign-in form elements
    const heading = page.getByRole('heading', { name: /sign in|authenticate|login/i });
    await expect(heading).toBeVisible();
    
    // Check for GitHub OAuth button
    const githubBtn = page.getByRole('link', { name: /github|sign.*github/i });
    await expect(githubBtn).toBeVisible();
  });

  test('public pages are accessible without auth', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('protected routes redirect to sign-in', async ({ page }) => {
    const protectedRoutes = [
      '/dashboard',
      '/dashboard/repositories',
      '/dashboard/drafts',
      '/dashboard/settings',
      '/dashboard/audit',
      '/dashboard/project-cards',
    ];

    for (const route of protectedRoutes) {
      await page.goto(route);
      await page.waitForURL('**/sign-in*', { timeout: 5000 });
      expect(page.url()).toContain('/sign-in');
    }
  });

  test('sign-in page has accessible navigation', async ({ page }) => {
    await page.goto('/sign-in');
    
    // Check for form controls
    const controls = page.locator('button, a[href]');
    const count = await controls.count();
    expect(count).toBeGreaterThan(0);
  });
});
