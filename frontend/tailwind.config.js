/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core UI
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Wedding Palette
        'wedding-navy': "hsl(var(--wedding-green-dark))",     // #254133 → Main headings & text
        'wedding-green': "hsl(var(--wedding-green-light))",   // #8FA893 → Accents, buttons, icons
        'wedding-cream': "hsl(var(--wedding-cream))",         // #FAF9F6 → Backgrounds
        'wedding-gold': "hsl(var(--wedding-gold))",           // #C5B388 → Highlights, timelines
        'wedding-ivory': '#f8f5f0',                           // Soft warm off-white for cards
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        card: '0 20px 40px -10px rgba(37, 65, 51, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
