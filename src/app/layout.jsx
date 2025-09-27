import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navber/ResponsiveNav";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travo - Travel Agency",
  description: "Travo - Travel Agency Website using Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
