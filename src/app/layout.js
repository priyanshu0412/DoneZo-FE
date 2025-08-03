import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeNavbar from "@/components/homeLandingPage/homeNavbar";
import HomeFooter from "@/components/homeLandingPage/homeFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Done Zo",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <HomeNavbar />
        <main className="flex-grow">{children}</main>
        <HomeFooter />
      </body>
    </html>

  );
}
