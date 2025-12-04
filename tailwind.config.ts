import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        background: "#F5F5F7",
        surface: "#FFFFFF",
        foreground: "#1D1D1F",
        primary: {
          DEFAULT: "#1D1D1F",
          foreground: "#FFFFFF",