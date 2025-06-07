import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Animated UI Components - 精美的React组件库",
  description: "探索9个精美的UI组件：Text Shimmer文字闪烁、Gradient Text渐变文字、macOS Dock交互、3D登录卡片、Hero Futuristic、流体光标效果等。基于Next.js 15、React 19、TypeScript和Tailwind CSS构建的现代化组件展示平台。",
  keywords: "React组件, UI组件库, Next.js, TypeScript, Tailwind CSS, 动画效果, 3D效果, 交互设计",
  authors: [{ name: "UI Components Demo" }],
  robots: "index, follow",
  openGraph: {
    title: "Animated UI Components - 精美的React组件库",
    description: "探索9个精美的UI组件，包含文字动画、3D效果、交互设计等现代化组件展示",
    type: "website",
    locale: "zh_CN",
  },
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
