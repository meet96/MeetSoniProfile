import type {Metadata, Viewport} from "next";
import {Inter, Newsreader} from "next/font/google";
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
  twitter: {card: "summary"},
  icons: {icon: "/favicon.ico", apple: "/apple-touch-icon.png"}
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#faf9f7"},
    {media: "(prefers-color-scheme: dark)", color: "#121212"}
  ]
};

// Applies the saved/system theme before paint to avoid a light-mode flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: themeScript}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
