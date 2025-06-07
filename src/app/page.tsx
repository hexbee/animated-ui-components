import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Animated UI Components - 精美的React组件库",
    description: "探索8个精美的UI组件：Text Shimmer文字闪烁、Gradient Text渐变文字、macOS Dock交互、3D登录卡片、Hero Futuristic、流体光标效果等。基于Next.js 15、React 19、TypeScript和Tailwind CSS构建的现代化组件展示平台。",
    keywords: ["React组件", "UI组件库", "Next.js", "TypeScript", "Tailwind CSS", "动画效果", "3D效果", "交互设计"],
    openGraph: {
        title: "Animated UI Components - 精美的React组件库",
        description: "探索8个精美的UI组件，包含文字动画、3D效果、交互设计等现代化组件展示平台",
        url: "http://localhost:3000",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Animated UI Components 主页",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Animated UI Components - 精美的React组件库",
        description: "探索8个精美的UI组件，包含文字动画、3D效果、交互设计等现代化组件展示平台",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "http://localhost:3000",
    },
};

export default function Home() {
    // JSON-LD 结构化数据
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Animated UI Components",
        description: "精美的React组件库，包含8个现代化UI组件展示",
        url: "http://localhost:3000",
        author: {
            "@type": "Organization",
            name: "UI Components Demo",
        },
        mainEntity: {
            "@type": "SoftwareApplication",
            name: "Animated UI Components",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web Browser",
            description: "基于Next.js 15、React 19、TypeScript和Tailwind CSS构建的现代化UI组件展示平台",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
            },
            featureList: [
                "Text Shimmer 文字闪烁效果",
                "Gradient Text 渐变文字",
                "macOS Dock 交互效果",
                "3D 登录注册卡片",
                "Hero Futuristic 未来主义组件",
                "Splash Cursor 流体光标",
                "Background Gradient 背景渐变动画",
            ],
        },
    };
    return (
        <>
            {/* JSON-LD 结构化数据 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                {/* 主标题 */}
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white">
                        UI Components
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                        Beautiful animated UI components for your React applications
                    </p>

                    {/* 统计信息 */}
                    <div className="flex justify-center gap-8 mt-8 mb-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">组件</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">响应式</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">依赖</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        <Link
                            href="/text-shimmer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            Text Shimmer ✨
                        </Link>
                        <Link
                            href="/gradient"
                            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            渐变文字效果 ✨
                        </Link>
                        <Link
                            href="/dock"
                            className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            macOS Dock 🖥️
                        </Link>

                        <Link
                            href="/sign-in"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            登录卡片 🔐
                        </Link>
                        <Link
                            href="/signup"
                            className="inline-flex items-center px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            注册卡片 📝
                        </Link>
                        <Link
                            href="/hero"
                            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            未来英雄 🚀
                        </Link>
                        <Link
                            href="/splash"
                            className="inline-flex items-center px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            流体光标 🌊
                        </Link>
                        <Link
                            href="/background-gradient/simple"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200"
                        >
                            背景渐变动画 🎨
                        </Link>
                    </div>
                </div>

                {/* 组件介绍 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">
                        🎨 组件展示
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                        这是一个展示多种 UI 组件效果的 Next.js 项目，包含各种精美的动画组件和交互效果。
                        所有组件都来自 <span className="font-semibold text-blue-600 dark:text-blue-400">21st.dev</span> 的高质量 shadcn/ui 组件库。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">✨</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Text Shimmer</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">美丽的文字闪烁动画效果</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">动画</span>
                                <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">文字</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">🌈</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Gradient Text</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">动态渐变文字效果</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">渐变</span>
                                <span className="text-xs bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">文字</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">🖥️</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">macOS Dock</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">真实的 macOS Dock 交互效果</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">交互</span>
                                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">3D</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">🔐</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Sign-In Card</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">3D 登录卡片组件</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">3D</span>
                                <span className="text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">表单</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-lg p-6 border border-teal-200 dark:border-teal-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">📝</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Sign-Up Card</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">3D 注册卡片组件</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">3D</span>
                                <span className="text-xs bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">表单</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-6 border border-red-200 dark:border-red-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">🚀</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Hero Futuristic</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">未来主义英雄区域组件</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-2 py-1 rounded">WebGPU</span>
                                <span className="text-xs bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-2 py-1 rounded">3D</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">🌊</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Splash Cursor</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">流体动力学光标效果</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded">WebGL</span>
                                <span className="text-xs bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded">物理</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-pink-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-3">🎨</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Background Gradient</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">动态背景渐变动画效果</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-2 py-1 rounded">动画</span>
                                <span className="text-xs bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">交互</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 页脚信息 */}
                <div className="mt-12 text-center space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                            🎯 项目特色
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-green-500">✅</span>
                                <span className="text-gray-600 dark:text-gray-300">TypeScript 支持</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-green-500">✅</span>
                                <span className="text-gray-600 dark:text-gray-300">深色模式适配</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-green-500">✅</span>
                                <span className="text-gray-600 dark:text-gray-300">移动端优化</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-green-500">✅</span>
                                <span className="text-gray-600 dark:text-gray-300">高性能动画</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-green-500">✅</span>
                                <span className="text-gray-600 dark:text-gray-300">现代化设计</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-green-500">✅</span>
                                <span className="text-gray-600 dark:text-gray-300">易于集成</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        <p>基于 <span className="font-semibold">Next.js 15</span> + <span className="font-semibold">React 19</span> + <span className="font-semibold">Tailwind CSS</span> 构建</p>
                        <p className="mt-2">组件来源：<a href="https://21st.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">21st.dev</a></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
