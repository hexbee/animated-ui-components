"use client";

import { useState } from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function BackgroundGradientExamplesPage() {
    const [showCode, setShowCode] = useState(false);
    const [currentExample, setCurrentExample] = useState(0);

    const examples = [
        {
            title: "基础示例",
            description: "最简单的使用方式",
            code: `import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BasicExample() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Hello World
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}`,
            component: (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            Hello World
                        </p>
                    </div>
                </BackgroundGradientAnimation>
            )
        },
        {
            title: "自定义颜色",
            description: "自定义渐变颜色和背景",
            code: `<BackgroundGradientAnimation
    gradientBackgroundStart="rgb(255, 20, 147)"
    gradientBackgroundEnd="rgb(138, 43, 226)"
    firstColor="255, 105, 180"
    secondColor="255, 20, 147"
    thirdColor="138, 43, 226"
    fourthColor="75, 0, 130"
    fifthColor="255, 69, 0"
>
    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Pink & Purple
        </p>
    </div>
</BackgroundGradientAnimation>`,
            component: (
                <BackgroundGradientAnimation
                    gradientBackgroundStart="rgb(255, 20, 147)"
                    gradientBackgroundEnd="rgb(138, 43, 226)"
                    firstColor="255, 105, 180"
                    secondColor="255, 20, 147"
                    thirdColor="138, 43, 226"
                    fourthColor="75, 0, 130"
                    fifthColor="255, 69, 0"
                >
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            Pink & Purple
                        </p>
                    </div>
                </BackgroundGradientAnimation>
            )
        },
        {
            title: "非交互式",
            description: "禁用鼠标交互，使用较小尺寸",
            code: `<BackgroundGradientAnimation
    interactive={false}
    size="50%"
    containerClassName="h-96"
    gradientBackgroundStart="rgb(0, 0, 0)"
    gradientBackgroundEnd="rgb(30, 30, 30)"
>
    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
        <div className="text-center">
            <h2 className="text-2xl md:text-4xl mb-2">静态动画</h2>
            <p className="text-sm text-white/70">无鼠标交互</p>
        </div>
    </div>
</BackgroundGradientAnimation>`,
            component: (
                <BackgroundGradientAnimation
                    interactive={false}
                    size="50%"
                    containerClassName="h-96"
                    gradientBackgroundStart="rgb(0, 0, 0)"
                    gradientBackgroundEnd="rgb(30, 30, 30)"
                >
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl mb-2">静态动画</h2>
                            <p className="text-sm text-white/70">无鼠标交互</p>
                        </div>
                    </div>
                </BackgroundGradientAnimation>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            {/* 导航栏 */}
            <div className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/background-gradient"
                                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 text-sm font-medium rounded"
                            >
                                <span>←</span>
                                <span>返回</span>
                            </Link>
                            <h1 className="text-white font-bold text-lg">背景渐变动画示例</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="px-3 py-1 bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors text-sm rounded"
                            >
                                首页
                            </Link>
                            <button
                                onClick={() => setShowCode(!showCode)}
                                className="px-3 py-1 bg-white/10 text-white text-sm rounded hover:bg-white/20 transition-colors"
                            >
                                {showCode ? '隐藏代码' : '显示代码'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 示例选择器 */}
            <div className="fixed top-16 left-4 z-[100] bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <h3 className="text-white font-semibold mb-3 text-sm">示例列表</h3>
                <div className="space-y-2">
                    {examples.map((example, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentExample(index)}
                            className={`block w-full text-left px-3 py-2 rounded text-xs transition-all ${
                                currentExample === index
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <div className="font-medium">{example.title}</div>
                            <div className="text-xs text-white/50 mt-1">{example.description}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 代码面板 */}
            {showCode && (
                <div className="fixed top-16 right-4 z-[100] bg-black/90 backdrop-blur-md rounded-lg p-4 border border-white/10 max-w-md max-h-96 overflow-auto">
                    <h3 className="text-white font-semibold mb-3 text-sm">代码示例</h3>
                    <pre className="text-xs text-green-300 whitespace-pre-wrap">
                        {examples[currentExample].code}
                    </pre>
                </div>
            )}

            {/* 当前示例 */}
            <div className="pt-16">
                {examples[currentExample].component}
            </div>
        </div>
    );
}
