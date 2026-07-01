import type {Metadata} from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/components/site/header";
import {Footer} from "@/components/site/footer";
import {Toaster} from "@/components/ui/sonner";
import {siteConfig} from "@/content/site-config";

const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-sans",
  display: "swap"
});

const agustina = localFont({
  src: "./fonts/Agustina.woff",
  variable: "--font-heading",
  display: "swap"
});

const GA_MEASUREMENT_ID = "UA-135618960-2";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{name: siteConfig.name}],
  alternates: {canonical: "/"},
  openGraph: {
    type: "website",
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.ogDescription,
    siteName: `${siteConfig.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.ogDescription
  },
  icons: {
    icon: [
      {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
      {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"}
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#1a1a2e"
  }
};

export const viewport = {
  themeColor: siteConfig.seo.themeColor
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.seo.siteUrl,
  jobTitle: siteConfig.role,
  worksFor: {"@type": "Organization", name: siteConfig.company},
  sameAs: [
    "https://github.com/meet96",
    "https://www.linkedin.com/in/meet-soni-755774a6/",
    "https://medium.com/@mksoni1627",
    "https://stackoverflow.com/users/8405818/meet-soni"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gujarat Technological University"
  },
  knowsAbout: [
    ".NET Core",
    "Angular",
    "React",
    "Python",
    "AWS",
    "Azure",
    "Docker",
    "SQL",
    "Full Stack Development"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${agustina.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
