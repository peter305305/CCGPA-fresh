export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0f0f1a",
          800: "#161627",
          700: "#1f2133",
        },
        neon: {
          500: "#7c3aed",
          400: "#8b5cf6",
          300: "#a78bfa",
        },
        glow: {
          500: "#22d3ee",
          300: "#67e8f9",
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif']
      },
      boxShadow: {
        soft: "0 12px 32px rgba(15, 15, 26, 0.25)",
        glow: "0 0 0 1px rgba(139, 92, 246, 0.4), 0 12px 30px rgba(34, 211, 238, 0.2)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(139, 92, 246, 0.25), rgba(15, 15, 26, 0.9))",
        "card-sheen": "linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(34, 211, 238, 0.08))",
      },
      animation: {
        fade: "fadeIn 0.8s ease-out forwards",
        slide: "slideIn 0.5s ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        }
      },
    },
  },
  plugins: [],
};
