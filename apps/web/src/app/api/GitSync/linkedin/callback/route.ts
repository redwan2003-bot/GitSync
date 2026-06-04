import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '../../../../../lib/linkedin-oauth';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function GET(request: NextRequest) {
  const settingsUrl = new URL('/dashboard/settings', getBaseUrl());
  const code = request.nextUrl.searchParams.get('code');
  const state = request.nextUrl.searchParams.get('state');
  const error = request.nextUrl.searchParams.get('error');

  if (error) {
    settingsUrl.searchParams.set('linkedin', 'oauth_error');
    return NextResponse.redirect(settingsUrl);
  }

  if (!code || !state) {
    settingsUrl.searchParams.set('linkedin', 'missing_code');
    return NextResponse.redirect(settingsUrl);
  }

  const completeUrl = new URL('/api/GitSync/linkedin/callback/complete', getBaseUrl());
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Connecting LinkedIn | GitSync</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #020617;
        color: #cbd5e1;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .panel {
        border: 1px solid #1e293b;
        border-radius: 16px;
        background: #0f172a;
        padding: 20px 24px;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <form id="linkedin-complete" method="post" action="${escapeHtml(completeUrl.toString())}">
      <input type="hidden" name="code" value="${escapeHtml(code)}" />
      <input type="hidden" name="state" value="${escapeHtml(state)}" />
      <div class="panel">Finishing LinkedIn connection...</div>
      <noscript><button type="submit">Continue</button></noscript>
    </form>
    <script>document.getElementById('linkedin-complete').submit();</script>
  </body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
