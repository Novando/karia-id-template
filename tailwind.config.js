/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'custom-xl': '0 3px 40px 0 rgb(0 0 0 / 0.1)'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          fg: 'var(--primary-fg)',
          fgh: 'var(--primary-fg-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
          fg: 'var(--secondary-fg)',
          fgh: 'var(--secondary-fg-hover)',
        },
        ternary: {
          DEFAULT: 'var(--ternary)',
          hover: 'var(--ternary-hover)',
          fg: 'var(--ternary-fg)',
          fgh: 'var(--ternary-fg-hover)',
        },
        background: {
          DEFAULT: 'var(--background)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
        },
      },
    },
  },
  plugins: [],
}

