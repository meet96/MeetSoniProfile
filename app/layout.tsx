import type {Metadata, Viewport} from "next";
import {Inter, Newsreader} from "next/font/google";
import {Logo} from "@/components/Logo";
import {profile} from "@/data/profile";
import "./globals.css";

const sans = Inter({subsets: ["latin"], variable: "--font-sans"});
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"]
});

const description = `${profile.title} with ${profile.yearsOfExperience} years in .NET, Azure, system design and technical leadership.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description,
  authors: [{name: profile.name}],
  keywords: [
    ".NET",
    "C#",
    "Azure",
    "Software Engineer",
    "System Design",
    profile.name
  ],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description,
    type: "profile",
    url: "/"
  },
  twitter: {card: "summary"}
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#fafaf9"},
    {media: "(prefers-color-scheme: dark)", color: "#0b0d12"}
  ]
};

// Runs before paint: applies the saved/system theme (no flash), enables
// JS-only animations, and plays the intro once per session unless the
// visitor prefers reduced motion.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.dataset.theme=t}catch(e){}d.classList.add("js");try{if(!sessionStorage.getItem("intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("intro");sessionStorage.setItem("intro","1")}}catch(e){}})()`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: bootScript}} />
      </head>
      <body>
        <div className="intro-overlay" aria-hidden="true">
          <Logo className="intro-logo" />
          <div className="intro-bar" />
        </div>
        {children}
      </body>
    </html>
  );
}
