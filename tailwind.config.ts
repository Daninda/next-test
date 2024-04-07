import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    colors: {
      cyan: {
        100: '#45B3D8',
        200: '#0198CA',
      },
      gray: {
        100: '#E5E5E5',
        200: '#C2C2C2',
        300: '#9D9D9D',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
export default config;
