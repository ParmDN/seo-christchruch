import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEO Company in New Zealand — SEO & Digital Marketing",
  description: "SEO Company in New Zealand offers expert SEO and digital marketing services tailored to NZ businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Vendor CSS */}
        <link rel="icon" href="/assets/seoly/christchurch-logo.png" />
        <link rel="stylesheet" href="/assets/seoly/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/seoly/vendors.css" />
        <link rel="stylesheet" href="/assets/seoly/style.css" />
        <link rel="stylesheet" href="/assets/seoly/coloring.css" />
        <link rel="stylesheet" id="colors" href="/assets/seoly/scheme-01.css" />
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkfQmbXy6SuXOKjM3R0ZC2RYxjQ5G2v5ZtGa7xY6FQ2PqYx1Y6r9oUG3A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Font Awesome v4 compatibility shims (for 'fa' legacy class) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/v4-shims.min.css"
          integrity="sha512-uL0WnqAgfQdK9qfGkWcM1m9oGkq9sQ3IYc2Tz5M2bC2l0G2s4y0tC2W6o7J3Rkz8ySxEwz3cYwH7x0Yh2k9mLA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Icofont CDN for icofont-* icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/icofont/1.0.1/css/icofont.min.css"
          integrity="sha512-xh8h0y6b1QomO5WgYw1QpBvy3Q6k6yq3mFqz5wq0M0q5hZ9bX9c1lguqz4pL0M4X2H3r0O0H8l6G7xQmJ2cXoA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* ET Line Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/et-line@1.0.1/style.css"
        />
        {/* Elegant Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@icon/elegant-icons@0.0.1-alpha.4/css/elegant-icons.min.css"
        />
 <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Seoly vendor scripts (load after hydration to avoid SSR hydration mismatches) */}
        <Script src="/assets/seoly/vendors.js" strategy="afterInteractive" />
        <Script src="/assets/seoly/designesia.js" strategy="afterInteractive" />
        <Script src="/assets/seoly/custom-marquee.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
