import localFont from "next/font/local";

export const fontMono = localFont({
  display: "swap",
  src: "./JetBrainsMonoNerdFontMono-Bold.ttf",
  variable: "--font-mono",
});

export const fontSans = localFont({
  display: "swap",
  src: "./JetBrainsMonoNerdFontMono-Regular.ttf",
  variable: "--font-sans",
  weight: "300 700",
});

export const fontHeading = localFont({
  display: "swap",
  src: "./JetBrainsMonoNerdFontMono-ExtraBold.ttf",
  variable: "--font-heading",
  weight: "900",
});
