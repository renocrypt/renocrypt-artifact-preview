// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
}

export default nextConfig

// package.json
{
  "name": "claude-artifact-preview",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@babel/core": "^7.24.0",
    "@babel/plugin-transform-runtime": "^7.24.0",
    "@babel/preset-react": "^7.23.3",
    "@babel/preset-typescript": "^7.23.3",
    "@babel/standalone": "^7.24.0",
    "@monaco-editor/react": "^4.6.0",
    "@radix-ui/react-icons": "^1.3.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.341.0",
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-error-boundary": "^4.0.12",
    "tailwind-merge": "^2.2.1",
    "zustand": "^4.5.1"
  },
  "devDependencies": {
    "@types/node": "^20.11.20",
    "@types/react": "^18.2.58",
    "@types/react-dom": "^18.2.19",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3"
  }
}

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
