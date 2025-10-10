// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "../components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ Import added

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulshan Kumar - Full Stack Web Developer | Portfolio",
  description:
    "Portfolio website of Gulshan Kumar — Full Stack Web Developer from Lucknow, Uttar Pradesh, India. Explore my projects, skills, and experience, and contact me for professional web development services.",
  authors: [{ name: "Gulshan Kumar" }],
  icons: "/myimage.png",
  keywords: [
    // Personal Branding
    "Gulshan Kumar Portfolio",
    "Gulshan Kumar Web Developer",
    "Gulshan Kumar Full Stack Developer",
    "Gulshan Kumar Frontend Developer",
    "Gulshan Kumar Backend Developer",
    "Gulshan Kumar React Developer",
    "Gulshan Kumar Next.js Developer",
    "Gulshan Kumar MERN Stack Developer",
    "Gulshan Kumar JavaScript Developer",
    "Gulshan Kumar TypeScript Developer",
    "Gulshan Kumar UI/UX Designer",
    "Gulshan Kumar Freelancer",
    "Gulshan Kumar Software Engineer",
    "Gulshan Kumar Programmer",

    // Location-based SEO
    "Web Developer in Lucknow",
    "Frontend Developer in Lucknow",
    "Backend Developer in Lucknow",
    "Full Stack Developer in Lucknow",
    "Freelance Web Developer in Lucknow",
    "Full Stack Developer in Uttar Pradesh",
    "Freelance Web Developer India",

    // Services
    "Hire Web Developer",
    "Hire Full Stack Developer",
    "Hire React Developer",
    "Freelance Web Developer",
    "Website development services",
    "Custom website development",
    "Responsive web design",
    "SEO optimized websites",

    // Projects
    "Myntra Clone Project",
    "Video Call Chat App",
    "ToDo Web App",
    "ConnectMe",
    "WhoLink",
    "Blog Website",
    "ByteUprise Project",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gulshan Kumar",
              image: "https://gk-webfolio.vercel.app/myimage.png",
              jobTitle: "Full Stack Web Developer",
              url: "https://gk-webfolio.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/gulshan-kumar-61b446253/",
                "https://github.com/Gulshankuamr",
                "https://www.instagram.com/developer_tipss/",
              ],
              knowsAbout: [
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Express.js",
                "Node.js",
                "SQL",
                "UI/UX Design",
                "Responsive Web Design",
                "SEO",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India",
              },
              hasOccupation: {
                "@type": "Occupation",
                name: "Web Developer",
                skills: [
                  "Frontend Development",
                  "Backend Development",
                  "MERN Stack",
                  "Responsive Design",
                  "SEO",
                ],
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://gk-webfolio.vercel.app",
              },
            }),
          }}
        />
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="ETpfMVbd5MVRbbOSI8n5MtBcYkJc7IUWaw9QGhatoCE"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights /> {/* ✅ Added for performance monitoring */}
      </body>
    </html>
  );
}
