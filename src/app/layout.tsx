import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/shared/ui/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Груминг для питомцев | Хабаровск",
  description:
    "Профессиональный груминг салон для собак и кошек в Хабаровске. Стрижка, уход, гигиена. Запишите своего питомца на процедуры!",
  keywords:
    "груминг Хабаровск, стрижка собак Хабаровск, груминг для кошек Хабаровск, уход за питомцами, зоосалон Хабаровск",
  authors: [{ name: "Promotion Pal" }],
  openGraph: {
    title: "Груминг для питомцев | Хабаровск",
    description:
      "Профессиональный груминг салон в Хабаровске. Забота и красота для ваших питомцев!",
    type: "website",
    locale: "ru_RU",
    siteName: "Груминг Хабаровск",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Груминг салон Хабаровск",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Груминг для питомцев | Хабаровск",
    description: "Профессиональный груминг в Хабаровске для собак и кошек",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://grooming.promotion-pal.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
