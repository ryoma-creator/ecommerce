/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // デフォルトの設定を完全に置き換えたい場合
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        // "Apply 30px padding to the container at all breakpoints."
        lg: '0',
        // "At screen sizes <= `lg` breakpoint, the container's padding will be 0px."
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      // デフォルトの設定に新しい値を追加したい場合
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
}
