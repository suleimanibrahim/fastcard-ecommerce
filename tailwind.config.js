/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "1xl": "1420px",
        "2xl": "1550px"
      },
      // animation: {
      //   slide: "slide 35s linear infinite"
      // },
      // keyframes: {
      //   slide: {
      //     "0%": { transform: "translateX(-120%)" },
      //     "100%": { transform: "translateX(110%)" }
      //   }
      // }

      colors: {
        "active-bullet": "#2E8B57", // اللون الأخضر للـ active bullet
        "hover-bullet": "#38a169" // اللون الأخضر الفاتح عند hover
      },
      borderRadius: {
        bullet: "50%" // الشكل الدائري للـ bullets
      },
      width: {
        bullet: "12px" // حجم الـ bullet
      },
      height: {
        bullet: "12px" // حجم الـ bullet
      }
    }
  },
  plugins: []
};
