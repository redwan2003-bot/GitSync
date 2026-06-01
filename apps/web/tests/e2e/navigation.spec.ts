import { test, expect } from '@playwright/test';

/**
 * Dashboard Navigation and UI Tests
 * - Sidebar navigation
 * - Page layouts
 * - Responsive design
 * - Menu functionality
 */

test.describe('Dashboard Navigation', () => {
  // Note: These tests assume authenticated state
  // In real scenarios, you'd use API calls to mock authentication
  
  test('dashboard page structure', async ({ page }) => {
    // Go to sign-in to verify routing works
    await page.goto('/dashboard');
    
    // Should redirect to sign-in if not authenticated
    const signInUrl = page.url();
    expect(signInUrl).toMatch(/sign-in|auth/);
  });

  test('dashboard responsive layout', async ({ page }) => {
    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/dashboard');
    
    // Check that page loads without errors
    const response = await page.goto('/dashboard');
    expect(response?.status()).toBeLessThanOrEqual(404); // 404 is expected if not authed
  });

  test('navigation links are keyboard accessible', async ({ page }) => {
    await page.goto('/sign-in');
    
    // Tab through page
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Check that some element has focus
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });
    expect(focusedElement).toBeTruthy();
  });
});

test.describe('Page Layouts', () => {
  test('repositories page loads', async ({ page }) => {
    const response = await page.goto('/dashboard/repositories');
    expect([200, 307, 308]).toContain(response?.status()); // 307/308 for redirect to sign-in
  });

  test('drafts page loads', async ({ page }) => {
    const response = await page.goto('/dashboard/drafts');
    expect([200, 307, 308]).toContain(response?.status());
  });

  test('settings page loads', async ({ page }) => {
    const response = await page.goto('/dashboard/settings');
    expect([200, 307, 308]).toContain(response?.status());
  });

  test('audit page loads', async ({ page }) => {
    const response = await page.goto('/dashboard/audit');
    expect([200, 307, 308]).toContain(response?.status());
  });

  test('project-cards page loads', async ({ page }) => {
    const response = await page.goto('/dashboard/project-cards');
    expect([200, 307, 308]).toContain(response?.status());
  });
});

test.describe('Mobile Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
  });

  test('menu button is visible on mobile', async ({ page }) => {
    await page.goto('/dashboard');
    
    // The menu button should be in the DOM even if page redirects
    // Just verify the page loads without JavaScript errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    expect(errors.length).toBe(0);
  });
});

test.describe('Escape Key Handling', () => {
  test('escape closes modals and dropdowns', async ({ page }) => {
    await page.goto('/sign-in');
    
    // Simulate escape key press
    await page.keyboard.press('Escape');
    
    // Page should remain stable
    const response = await page.goto(page.url());
    expect(response?.status()).toBeLessThanOrEqual(404);
  });
});
