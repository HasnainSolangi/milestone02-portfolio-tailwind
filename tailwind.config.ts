// tailwind.config.ts
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all relevant files are scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Customize primary color
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
};
