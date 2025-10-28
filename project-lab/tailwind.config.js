/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral / background scale
        brand: {
          50: '#fafbfd',
          100: '#f3f6f9',
          200: '#e6eef6',
          300: '#cfe0ec',
          400: '#9ecbe0',
          500: '#5aa7c9',
          600: '#4189aa',
          700: '#2e5f74',
          800: '#223e50',
          900: '#0f1f28'
        },

        // Primary (buttons, accents) - vivid blue
        accent: {
          50: '#f5f8ff',
          100: '#e6f0ff',
          200: '#cce0ff',
          300: '#99c2ff',
          400: '#66a3ff',
          500: '#2d7bff',
          600: '#235fd6',
          700: '#1b47a6',
          800: '#123076',
          900: '#09183a'
        },

        // Warm / accent (highlights, warnings)
        warm: {
          50: '#fffaf5',
          100: '#fff1e0',
          200: '#ffe0bf',
          300: '#ffc290',
          400: '#ff9b59',
          500: '#ff7a2a',
          600: '#d65d12',
          700: '#a43f0e',
          800: '#6b2608',
          900: '#381204'
        },

        // Secondary / supportive (panels)
        ocean: {
          50: '#f0fbff',
          100: '#dcf7fb',
          200: '#bbeef7',
          300: '#89e0ef',
          400: '#4fcfdf',
          500: '#13b8c8',
          600: '#0f92a0',
          700: '#0a6170',
          800: '#073a44',
          900: '#041820'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft-xl': '0 10px 30px rgba(13, 38, 66, 0.08)'
      }
    },
  },
  plugins: [],
}