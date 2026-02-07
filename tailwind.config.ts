import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background), 1)",
        border: "rgba(var(--border), 1)",
        card: "rgba(var(--card), 1)",
        "copy-primary": "rgba(var(--copy-primary), 1)",
        "copy-secondary": "rgba(var(--copy-secondary), 1)",
        cta: "rgba(var(--cta), 1)",
        "cta-active": "rgba(var(--cta-active), 1)",
        "cta-text": "rgba(var(--cta-text), 1)",
        grape: "rgba(var(--grape), 1)",
      },
      borderWidth: {
        'thin': 'var(--border-thickness-thin)',
        'default': 'var(--border-thickness-default)',
        'thick': 'var(--border-thickness-thick)',
        'extra': 'var(--border-thickness-extra)',
      }
    },
  },
  plugins: [],
}

export default config