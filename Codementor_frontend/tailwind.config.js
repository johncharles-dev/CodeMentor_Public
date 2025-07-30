// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
        float: "float 12s ease-in-out infinite",
        gradient: "gradient 8s linear infinite",
        reveal: "reveal 1.5s cubic-bezier(0.2, 1, 0.3, 1)",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeUp: "fadeUp 1s ease-out forwards",

      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        reveal: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    screens: {
      lg: { min: "925px" },
    },
  },
  plugins: [],
};
