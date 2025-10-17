/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2E4E3E',
        'soft-beige': '#F7F3EB',
        'cream-white': '#FBF8F3',
        'warm-sand': '#E8DCC0',
        'blush-taupe': '#D3BFA6',
        'dark-text': '#2A2A2A',
        'muted-grey': '#7A7A7A',
      },
      fontFamily: {
        'heading': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-roboto)', 'sans-serif'],
        'figtree': ['var(--font-figtree)', 'sans-serif'],
        'unbounded': ['var(--font-unbounded)', 'sans-serif'],
        'berkshire': ['var(--font-berkshire)', 'cursive'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
