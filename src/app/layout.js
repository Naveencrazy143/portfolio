import { Gabarito, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./ThemeContext";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naveen J | Full Stack Developer Portfolio",
  description:
    "Naveen J's Full Stack Developer portfolio. 4 years of experience in React.js and 2+ years in Node.js, specializing in scalable web applications and enterprise solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${gabarito.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

