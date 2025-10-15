import "./globals.css";
import type { Metadata } from "next";
import Header from "./_componets/Header";
import Footer from "./_componets/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL('https://my-next-project-git-main-yuuki-saitos-projects.vercel.app/'),
  title: {
    template: '%s | ささくれ',
    default: 'ささくれ',
  },
  description:
    'ささくれのWEBサイトです',
  openGraph: {
    title: 'ささくれ',
    description:
      'ささくれのWEBサイトです',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://my-next-project-git-main-yuuki-saitos-projects.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-51LMQKL8PF" />
    </html>
  );
}
