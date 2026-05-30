import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-soft': 'var(--surface-soft)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        signal: 'var(--signal)',
        commit: 'var(--commit)',
        cyan: 'var(--cyan)',
        linkedin: 'var(--linkedin)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'pixelify': ['Pixelify Sans', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
