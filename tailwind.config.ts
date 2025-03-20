import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        michroma: ['var(--font-michroma)'],
        cairo: ['var(--font-cairo)'],
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-in-out forwards',
        'fly-across': 'fly-across 15s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fly-across': {
          '0%': { transform: 'translateX(-100%) translateY(0)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '45%': { transform: 'translateX(-20%) translateY(-20%)', opacity: '0.9' },
          '50%': { transform: 'translateX(0%) translateY(-25%)' },
          '55%': { transform: 'translateX(20%) translateY(-20%)' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateX(100%) translateY(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 