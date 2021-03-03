'use strict';

const { spacing } = require('tailwindcss/defaultTheme');
const mdx = require('@mdx-js/mdx');

module.exports = {
  purge: {
    content: [
      './apps/**/*.html',
      './apps/**/*.mdx',
      './apps/**/*.tsx',
      './apps/**/*.ts',
      './apps/**/*.scss',
      './libs/**/*.html',
      './libs/**/*.mdx',
      './libs/**/*.tsx',
      './libs/**/*.ts',
      './libs/**/*.scss',
    ],
    // PurgeCSS options
    // Reference: https://purgecss.com/
    options: {
      rejected: true,
      printRejected: true,
      safelist: ['html', 'body', 'dark'],
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  /**
   * Enable dark mode
   */
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        writerplan: [
          'AvenirNext',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      screens: {
        sm: { min: '600px' },
        md: { min: '960px' },
        lg: { min: '1280px' },
        xg: { min: '1600px' },
        xl: { min: '1920px' },
        print: { raw: 'print' },
        portrait: { raw: '(orientation: portrait)' },
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        purple: {
          DEFAULT: '#7134A0',
          50: '#DFCBEE',
          100: '#D3B8E8',
          200: '#BB92DB',
          300: '#A36BCF',
          400: '#8C45C2',
          500: '#7134A0',
          600: '#56277A',
          700: '#3B1B53',
          800: '#1F0E2D',
          900: '#040206',
        },
        red: {
          DEFAULT: '#FA3643',
          50: '#FFFFFF',
          100: '#FFFDFD',
          200: '#FECBCF',
          300: '#FC9AA0',
          400: '#FB6872',
          500: '#FA3643',
          600: '#F70616',
          700: '#C50512',
          800: '#93040D',
          900: '#620209',
        },
        blue: {
          DEFAULT: '#3C74DB',
          50: '#FEFEFF',
          100: '#E8EFFB',
          200: '#BDD0F3',
          300: '#92B1EB',
          400: '#6793E3',
          500: '#3C74DB',
          600: '#245BC0',
          700: '#1C4695',
          800: '#14326A',
          900: '#0C1E3F',
        },
        green: {
          DEFAULT: '#05B560',
          50: '#A3FCD1',
          100: '#8AFCC5',
          200: '#59FAAC',
          300: '#27F994',
          400: '#06E77A',
          500: '#05B560',
          600: '#048346',
          700: '#02522B',
          800: '#012011',
          900: '#000000',
        },
        gray: {
          DEFAULT: '#9AA1A6',
          50: '#FEFEFE',
          100: '#FAFAFA',
          200: '#EBEDEE',
          300: '#D0D3D6',
          400: '#B5BABE',
          500: '#9AA1A6',
          600: '#7F888E',
          700: '#666E74',
          800: '#4E5459',
          900: '#363B3E',
        },
        shadow: {
          50: '#f9fafa',
          100: '#f5f7f3',
          200: '#e9ece2',
          300: '#d8d9ca',
          400: '#b7b59d',
          500: '#8d8e6d',
          600: '#666849',
          700: '#4c503c',
          800: '#383c32',
          900: '#2c302a',
        },
        hotpink: {
          50: '#fbfafa',
          100: '#faf3f6',
          200: '#f5ddec',
          300: '#f0bddf',
          400: '#ed8ac6',
          500: '#e85ca8',
          600: '#d13b81',
          700: '#9e2d63',
          800: '#70244a',
          900: '#541e39',
        },
        sunset: {
          50: '#fcfaf9',
          100: '#fbf3f2',
          200: '#f8dee1',
          300: '#f5bec7',
          400: '#f48b98',
          500: '#f25e69',
          600: '#e13c45',
          700: '#b42d3a',
          800: '#832430',
          900: '#631e28',
        },
        tomato: {
          50: '#fcfaf8',
          100: '#fbf4ef',
          200: '#f8e1d8',
          300: '#f5c3b4',
          400: '#f39379',
          500: '#f16748',
          600: '#e0432d',
          700: '#b33229',
          800: '#832726',
          900: '#642021',
        },
        orange: {
          50: '#fbfaf7',
          100: '#fbf5ec',
          200: '#f7e6d0',
          300: '#f3cca3',
          400: '#eda161',
          500: '#e87632',
          600: '#cf511e',
          700: '#9f3c1e',
          800: '#732f1f',
          900: '#56251c',
        },
        yellow: {
          50: '#fbfaf8',
          100: '#f9f7ef',
          200: '#f2ebd4',
          300: '#ead6ac',
          400: '#dab06d',
          500: '#c5883a',
          600: '#9e6123',
          700: '#714921',
          800: '#503720',
          900: '#3c2c1d',
        },
        steel: {
          50: '#f7fafb',
          100: '#f0f6f8',
          200: '#dce8f1',
          300: '#c2d3e9',
          400: '#96aedc',
          500: '#6684ca',
          600: '#4860ac',
          700: '#3a4a86',
          800: '#2d3961',
          900: '#242e4b',
        },
        denim: {
          50: '#f6f9fc',
          100: '#ebf4fb',
          200: '#d1e2f8',
          300: '#b3caf7',
          400: '#88a0f5',
          500: '#5a73f2',
          600: '#4150e9',
          700: '#353fcb',
          800: '#2a319a',
          900: '#222976',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.purple.500'),
              '&:hover': {
                color: theme('colors.purple.300'),
              },
              '&:visited': {
                color: theme('colors.purple.500'),
              },
              code: { color: theme('colors.blue.200') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            a: {
              color: theme('colors.purple.300'),
              '&:hover': {
                color: theme('colors.purple.100'),
              },
              '&:visited': {
                color: theme('colors.purple.300'),
              },
              code: { color: theme('colors.purple.300') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.400'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.200') },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
