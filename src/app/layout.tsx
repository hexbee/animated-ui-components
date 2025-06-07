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
  metadataBase: new URL("http://localhost:3000"),
  title: "Animated UI Components - 精美的React组件库",
  description: "探索8个精美的UI组件：Text Shimmer文字闪烁、Gradient Text渐变文字、macOS Dock交互、3D登录卡片、Hero Futuristic、流体光标效果等。基于Next.js 15、React 19、TypeScript和Tailwind CSS构建的现代化组件展示平台。",
  keywords: ["React组件", "UI组件库", "Next.js", "TypeScript", "Tailwind CSS", "动画效果", "3D效果", "交互设计", "shadcn/ui", "Framer Motion"],
  authors: [{ name: "UI Components Demo", url: "http://localhost:3000" }],
  creator: "UI Components Demo",
  publisher: "UI Components Demo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "http://localhost:3000",
    siteName: "Animated UI Components",
    title: "Animated UI Components - 精美的React组件库",
    description: "探索8个精美的UI组件，包含文字动画、3D效果、交互设计等现代化组件展示平台。基于Next.js 15、React 19构建。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Animated UI Components - 精美的React组件库",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated UI Components - 精美的React组件库",
    description: "探索8个精美的UI组件，包含文字动画、3D效果、交互设计等现代化组件展示平台",
    images: ["/og-image.png"],
    creator: "@ui_components",
    site: "@ui_components",
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
