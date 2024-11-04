import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jayesh Deshmukh - Backend Developer & DevOps Engineer",
  description: "Explore the portfolio of Jayesh Deshmukh, a third-year undergraduate student at IIT Kharagpur specializing in backend development, DevOps engineering, and Flutter development. Discover his projects, internships, and teaching experiences, including successful courses on Udemy, and learn how he combines technical expertise with a passion for building real-world applications.",
  keywords: "Jayesh Deshmukh, IIT Kharagpur, Backend Developer, DevOps Engineer, Flutter Developer, Portfolio, Projects, Internships, Teaching, Udemy, Courses, Technical Expertise, Real-World Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
