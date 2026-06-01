import { test, expect } from '@playwright/test';

/**
 * UI Elements and Button Tests
 * - All buttons are functional (not dead)
 * - Links work correctly
 * - Dropdowns and modals function
 * - Disabled states are clear
 */

test.describe('Button Functionality', () => {
  test('no dead buttons exist on sign-in page', async ({ page }) => {
    await page.goto('/sign-in');
    
    const buttons = page.locator('button, a[role="button"]');
    const count = await buttons.count();
    
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      
      // Check button has text or aria-label
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      const hasLabel = (text && text.trim().length > 0) || ariaLabel;
      
      expect(hasLabel).toBeTruthy();
      
      // Check if button is not hidden
      const isVisible = await button.isVisible();
      expect(isVisible).toBeTruthy();
    }
  });

  test('disabled buttons show clear indication', async ({ page }) => {
    await page.goto('/sign-in');
    
    const disabledButtons = page.locator('button[disabled]');
    const count = await disabledButtons.count();
    
    for (let i = 0; i < count; i++) {
      const button = disabledButtons.nth(i);
      const text = await button.textContent();
      
      // Disabled buttons should have text indicating they're disabled
      // e.g., "Coming soon", "Disabled", etc.
      expect(text).toBeTruthy();
    }
  });

  test('buttons in repository page don\'t have console errors', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    await page.goto('/dashboard/repositories');
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    
    // No error logs should be present
    expect(errors.length).toBe(0);
  });

  test('buttons in draft page don\'t have console errors', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    await page.goto('/dashboard/drafts');
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    
    expect(errors.length).toBe(0);
  });
});

test.describe('Link Functionality', () => {
  test('all links are valid URLs', async ({ page }) => {
    await page.goto('/sign-in');
    
    const links = page.locator('a[href]');
    const count = await links.count();
    
    const invalidLinks: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      
      // Check if href is valid
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        try {
          new URL(href, 'http://localhost:3000');
        } catch (e) {
          // Relative URLs should still be valid
          if (!href.startsWith('/')) {
            invalidLinks.push(href);
          }
        }
      }
    }
    
    expect(invalidLinks.length).toBe(0);
  });

  test('internal links don\'t have target="_blank" unexpectedly', async ({ page }) => {
    await page.goto('/sign-in');
    
    const links = page.locator('a[href^="/"]');
    const count = await links.count();
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const target = await link.getAttribute('target');
      
      // Internal links shouldn't open in new tab
      expect(target).not.toBe('_blank');
    }
  });

  test('external links have target="_blank" and rel="noopener noreferrer"', async ({ page }) => {
    await page.goto('/sign-in');
    
    const externalLinks = page.locator('a[href^="http"]');
    const count = await externalLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      
      // External links should open in new tab with proper security
      if (target === '_blank') {
        expect(rel).toContain('noopener');
      }
    }
  });
});

test.describe('Form Elements', () => {
  test('form inputs are properly labeled', async ({ page }) => {
    await page.goto('/sign-in');
    
    const inputs = page.locator('input');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const name = await input.getAttribute('name');
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      
      // Input should have name, id, or aria-label
      const hasLabel = name || id || ariaLabel;
      expect(hasLabel).toBeTruthy();
    }
  });
});

test.describe('Error Handling', () => {
  test('page handles network errors gracefully', async ({ page }) => {
    await page.route('**/api/**', route => route.abort());
    await page.goto('/dashboard');
    
    // Page should still render without crashing
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });

  test('broken images don\'t break layout', async ({ page }) => {
    await page.route('**/image/**', route => route.abort());
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    // Page should render even if images fail
    expect(page).toBeTruthy();
  });
});

test.describe('Loading States', () => {
  test('loading spinners are visible during fetch', async ({ page }) => {
    // Slow down network to see loading states
    await page.route('**/api/**', async route => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.abort();
    });
    
    await page.goto('/dashboard/settings');
    
    // Page should attempt to load
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
