export const COLORS = {
  bg: '#0e1116',
  surface: '#151a21',
  'surface-soft': '#1e242d',
  text: '#f5f7fa',
  muted: '#a7b0be',
  border: '#2a323d',
  signal: '#32d583',
  commit: '#f5b544',
  cyan: '#37d5ff',
  linkedin: '#0a66c2',
  danger: '#f97066',
} as const;

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
} as const;

export const TRANSITIONS = {
  smooth: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const STATUS_COLORS = {
  ready: COLORS.signal,
  syncing: COLORS.cyan,
  review: COLORS.commit,
  failed: COLORS.danger,
  published: COLORS.signal,
} as const;

export type StatusType = keyof typeof STATUS_COLORS;
