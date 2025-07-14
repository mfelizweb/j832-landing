import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        j832: {
          DEFAULT: '#00FF90',
          dark: '#00cc73',
        },
      },
    },
  },
  plugins: [],
};
 
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'glow': {
          '0%, 100%': { boxShadow: '0 0 24px 8px #00FF90' },
          '50%': { boxShadow: '0 0 36px 16px #00FF90AA' },
        },
        'shine': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'shine': 'shine 2s linear 1'
      }
    }
  }
};
 


export default config;
