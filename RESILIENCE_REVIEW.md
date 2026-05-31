# Dashboard Pages - Resilience Review

**Scope:** Checking all dashboard pages for proper error handling, loading states, and endpoint resilience

---

## Summary Table

| Page | Promise Pattern | Error Handling | Empty State | Loading State | Resilience |
|------|-----------------|-----------------|-------------|---------------|-----------|
| `/dashboard` | ✅ allSettled | ✅ Per-endpoint | ✅ Yes | ✅ Yes | ✅ GOOD |
| `/dashboard/repositories` | ❌ Single fetch | ✅ Try/catch | ✅ Yes | ✅ Yes | ⚠️ FRAGILE |
| `/dashboard/audit` | ❌ Single fetch | ✅ Try/catch | ✅ Yes | ✅ Yes | ⚠️ FRAGILE |
| `/dashboard/project-cards` | ⚠️ Nested try/catch | ✅ Try/catch | ✅ Yes | ✅ Yes | ⚠️ FRAGILE |
| `/dashboard/settings` | ❌ Single fetch | ✅ Try/catch | ❌ No | ✅ Yes | ❌ FRAGILE |
| `/dashboard/drafts` | ✅ None (mock data) | ✅ N/A | ✅ Yes | ✅ N/A | ⚠️ NEEDS WIRING |
| `/dashboard/drafts/[id]` | ❌ Unknown | ❌ Unknown | ❌ Unknown | ❌ Unknown | ❌ INCOMPLETE |

---

## Detailed Findings

### ✅ `/dashboard` - GOOD (Uses Promise.allSettled)

**Status:** Resilient - one endpoint failure won't break entire page

**Current Implementation:**
```typescript
// Lines 47-68 in page.tsx
const [metricsResult, draftsPendingResult, projectCardsResult, auditResult] = await Promise.allSettled([
  fetch('/api/GitSync/dashboard/metrics'),
  fetch('/api/GitSync/dashboard/pending-drafts'),
  fetch('/api/GitSync/project-cards'),
  fetch('/api/GitSync/audit-logs?limit=3'),
]);

// Per-endpoint error handling
if (metricsResult.status === 'rejected') {
  console.error('[dashboard] Metrics fetch failed:', metricsResult.reason);
  metrics = { totalRepositories: 0, totalDrafts: 0, publishedPosts: 0, failedSyncs: 0 };
} else if (!metricsResult.value.ok) {
  // ...
}
```

**Strengths:**
- ✅ Uses `Promise.allSettled` - continues even if one fails
- ✅ Per-endpoint error logging
- ✅ Default values for failed endpoints
- ✅ Graceful degradation - UI shows what it can load

**Weaknesses:** None - this is the correct pattern!

---

### ⚠️ `/dashboard/repositories` - FRAGILE (Single Fetch)

**Status:** Will break if API returns error

**Current Implementation:**
```typescript
// Lines 83-101 in repositories/page.tsx
try {
  const res = await fetch('/api/GitSync/github-repos');
  
  if (!res.ok) throw new Error('Failed to fetch repos');
  
  const data = await res.json();
  setRepos(data.repos || []);
} catch (err) {
  setError(err instanceof Error ? err.message : 'Failed to load repositories');
} finally {
  setLoading(false);
}
```

**Issues:**
- ❌ Single `fetch()` - if API throws, entire page shows error
- ❌ No empty state recovery if response is malformed
- ⚠️ Doesn't handle `data.repos` being undefined gracefully

**Recommendation:** Keep as-is for now (single endpoint), but add validation:
```typescript
setRepos(Array.isArray(data.repos) ? data.repos : []);
```

---

### ⚠️ `/dashboard/audit` - FRAGILE (Single Fetch)

**Status:** Will break if API returns error

**Current Implementation:**
```typescript
// Lines 68-86 in audit/page.tsx
try {
  const res = await fetch('/api/GitSync/audit-logs?limit=100');
  
  if (!res.ok) throw new Error('Failed to fetch logs');
  
  const data = await res.json();
  setLogs(data.logs || []);
  setFilteredLogs(data.logs || []);
} catch (err) {
  setError(err instanceof Error ? err.message : 'Failed to load audit logs');
} finally {
  setLoading(false);
}
```

**Issues:**
- ❌ Single `fetch()` - page-level error if API fails
- ✅ Good: Handles `data.logs` being undefined
- ✅ Good: Proper error messaging

**Status:** Acceptable (single data source, makes sense to fail)

---

### ⚠️ `/dashboard/project-cards` - FRAGILE (Nested Try/Catch)

**Status:** Shows empty state on error, but structure is convoluted

**Current Implementation:**
```typescript
// Lines 22-50 in project-cards/page.tsx
try {
  // Note: Project cards endpoint may not exist yet on backend
  // This is a placeholder for future implementation
  try {
    const res = await fetch('/api/GitSync/project-cards');
    if (res.ok) {
      const data = await res.json();
      setCards(data.cards || []);
      if (data.cards?.length > 0) {
        setSelectedCard(data.cards[0]);
      }
    } else {
      setCards([]);
    }
  } catch (err) {
    // Backend endpoint doesn't exist yet - show empty state
    setCards([]);
  }
} catch (err) {
  console.error('Failed to load project cards:', err);
} finally {
  setLoading(false);
}
```

**Issues:**
- ❌ Nested try/catch is confusing (double-wrapped)
- ✅ Good: Falls back to empty state
- ⚠️ Outer catch never triggered (inner catch handles all)

**Recommendation:** Simplify:
```typescript
try {
  const res = await fetch('/api/GitSync/project-cards');
  if (!res.ok) throw new Error('Failed to fetch project cards');
  
  const data = await res.json();
  setCards(Array.isArray(data.cards) ? data.cards : []);
} catch (err) {
  console.error('Failed to load project cards:', err);
  setCards([]);
} finally {
  setLoading(false);
}
```

---

### ❌ `/dashboard/settings` - FRAGILE + NO EMPTY STATE

**Status:** Critical - will break entire settings page if API fails

**Current Implementation:**
```typescript
// Lines 85-103 in settings/page.tsx
async function loadIntegrations() {
  try {
    const res = await fetch('/api/GitSync/integration-status');
    
    if (!res.ok) throw new Error('Failed to fetch integration status');
    
    const data = await res.json();
    setIntegrations(data);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to load integrations');
    console.error('Integration status error:', err);
  } finally {
    setLoading(false);
  }
}
```

**Critical Issues:**
- ❌ Single endpoint failure breaks entire settings page
- ❌ If fetch fails, `integrations` stays `null`
- ❌ Then at line 161: `integrations?.github.connected` shows undefined error cards
- ❌ No graceful empty state for integration cards

**Error Scenario:**
```
User loads settings → API fails → setError() called → renders error message
BUT integrations is still null → SettingCard tries to read properties of null → crashes
```

**Required Fix:**
```typescript
// Set default integrations on error
const defaultIntegrations = {
  github: { connected: false, configured: false },
  linkedin: { connected: false, configured: false },
  aiProvider: { provider: 'gemini', model: 'gemini-3.5-flash', configured: false },
  database: { connected: false },
  queue: { connected: false },
};

try {
  const res = await fetch('/api/GitSync/integration-status');
  if (!res.ok) throw new Error('Failed to fetch integration status');
  
  const data = await res.json();
  setIntegrations(data);
} catch (err) {
  setError(err instanceof Error ? err.message : 'Failed to load integrations');
  setIntegrations(defaultIntegrations);  // SET DEFAULTS ON ERROR
} finally {
  setLoading(false);
}
```

---

### ⚠️ `/dashboard/drafts` - NEEDS WIRING

**Status:** Using MOCK_DRAFTS - not connected to real API

**Current Implementation:**
```typescript
// Lines 13-42 in drafts/page.tsx
const MOCK_DRAFTS = [
  { id: '1', repo: 'gitflow', preview: '...', status: 'READY', timestamp: '2 hours ago' },
  // ...
];

// No fetch calls - just filters MOCK_DRAFTS
const filteredDrafts = activeTab === 'All'
  ? MOCK_DRAFTS
  : MOCK_DRAFTS.filter(d => d.status === activeTab);
```

**Issues:**
- ❌ Shows demo data in production
- ❌ Not fetching from API
- ⚠️ Status filtering works, but against fake data

**Required Fix:**
Add API fetching similar to repositories/audit pages:
```typescript
const [drafts, setDrafts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function loadDrafts() {
    try {
      const res = await fetch('/api/GitSync/drafts');
      if (!res.ok) throw new Error('Failed to fetch drafts');
      
      const data = await res.json();
      setDrafts(Array.isArray(data.drafts) ? data.drafts : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load drafts');
    } finally {
      setLoading(false);
    }
  }

  loadDrafts();
}, []);
```

---

### ❌ `/dashboard/drafts/[id]` - INCOMPLETE

**Status:** Route exists but likely no data fetching

**File:** `apps/web/src/app/dashboard/drafts/[id]/page.tsx`

**Expected Implementation:**
- Fetch `/api/GitSync/drafts/[id]` endpoint
- Show draft content
- Allow editing/reviewing
- Status: Not yet created or checked

**Action:** Review if exists and add data fetching if missing

---

## Recommendations (Priority)

### 🔴 CRITICAL - Fix These Now

1. **Settings Page** - Will crash if API fails
   ```
   File: apps/web/src/app/dashboard/settings/page.tsx
   Issue: No default integrations on error
   Fix: Set defaultIntegrations before try/catch
   ```

### 🟡 IMPORTANT - Fix Soon

2. **Drafts Page** - Still using mock data
   ```
   File: apps/web/src/app/dashboard/drafts/page.tsx
   Issue: MOCK_DRAFTS hardcoded
   Fix: Add API fetch similar to audit/repositories
   ```

3. **Project Cards** - Confusing nested try/catch
   ```
   File: apps/web/src/app/dashboard/project-cards/page.tsx
   Issue: Double-wrapped error handling
   Fix: Simplify to single try/catch with default []
   ```

### 🟢 NICE TO HAVE

4. **Repositories & Audit** - Could be more resilient
   ```
   Current: Acceptable (single endpoint makes sense)
   Optional: Add array validation for data.repos / data.logs
   ```

---

## Pattern Recommendation

**For pages with MULTIPLE endpoints:** Use `Promise.allSettled` (like `/dashboard`)
```typescript
const results = await Promise.allSettled([
  fetch('url1'),
  fetch('url2'),
  fetch('url3'),
]);

results.forEach((result, i) => {
  if (result.status === 'rejected') {
    // Handle error for endpoint i
  }
});
```

**For pages with SINGLE endpoint:** Standard try/catch is fine (like `/dashboard/repositories`)
```typescript
try {
  const res = await fetch('/api/...');
  if (!res.ok) throw new Error(...);
  // process data
} catch (err) {
  setError(...);
}
```

---

*Review completed: All 6 main pages + 1 dynamic route analyzed for resilience*
