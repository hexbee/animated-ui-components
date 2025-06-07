"use client";

import { useState } from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function BackgroundGradientPage() {
    const [currentDemo, setCurrentDemo] = useState<'default' | 'custom' | 'minimal'>('default');

    const demos = {
        default: {
            component: (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            Gradients X Animations
                        </p>
                    </div>
                </BackgroundGradientAnimation>
            ),
            title: "默认配置",
            description: "使用默认颜色和设置的背景渐变动画"
        },
        custom: {
            component: (
                <BackgroundGradientAnimation
                    gradientBackgroundStart="rgb(0, 17, 82)"
                    gradientBackgroundEnd="rgb(108, 0, 162)"
                    firstColor="255, 154, 158"
                    secondColor="254, 207, 239"
                    thirdColor="128, 222, 234"
                    fourthColor="255, 183, 197"
                    fifthColor="200, 162, 200"
                    pointerColor="140, 100, 255"
                    size="90%"
                    blendingValue="hard-light"
                    interactive={true}
                >
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <div className="text-center space-y-4">
                            <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/30">
                                自定义渐变
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-r from-pink-300 to-purple-300">
                                Interactive Background Animation
                            </p>
                        </div>
                    </div>
                </BackgroundGradientAnimation>
            ),
            title: "自定义配置",
            description: "自定义颜色、大小和交互设置的背景渐变动画"
        },
        minimal: {
            component: (
                <BackgroundGradientAnimation
                    gradientBackgroundStart="rgb(20, 20, 20)"
                    gradientBackgroundEnd="rgb(40, 40, 40)"
                    firstColor="100, 100, 255"
                    secondColor="200, 100, 255"
                    thirdColor="100, 200, 255"
                    fourthColor="255, 100, 200"
                    fifthColor="255, 200, 100"
                    size="60%"
                    blendingValue="multiply"
                    interactive={false}
                    containerClassName="h-96"
                >
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/40">
                                简约风格
                            </h2>
                            <p className="text-sm md:text-base text-white/70">
                                Non-interactive • Smaller size • Dark theme
                            </p>
                        </div>
                    </div>
                </BackgroundGradientAnimation>
            ),
            title: "简约风格",
            description: "较小尺寸、深色主题、非交互式的背景渐变动画"
        }
    };

    return (
        <div className="min-h-screen">
            {/* 返回首页按钮 */}
            <div className="fixed top-4 left-4 z-[100]">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-black/30 transition-all duration-200 text-sm font-medium"
                >
                    <span>←</span>
                    <span>返回首页</span>
                </Link>
            </div>

            {/* 控制面板 */}
            <div className="fixed top-16 left-4 z-[100] bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <h3 className="text-white font-semibold mb-3 text-sm">选择示例</h3>
                <div className="space-y-2">
                    {Object.entries(demos).map(([key, demo]) => (
                        <button
                            key={key}
                            onClick={() => setCurrentDemo(key as keyof typeof demos)}
                            className={`block w-full text-left px-3 py-2 rounded text-xs transition-all ${
                                currentDemo === key
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <div className="font-medium">{demo.title}</div>
                            <div className="text-xs text-white/50 mt-1">{demo.description}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 信息面板 */}
            <div className="fixed top-4 right-4 z-[100] bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 max-w-xs">
                <h3 className="text-white font-semibold mb-2 text-sm">组件特性</h3>
                <ul className="text-xs text-white/70 space-y-1 mb-4">
                    <li>• 可自定义渐变颜色</li>
                    <li>• 支持鼠标交互</li>
                    <li>• 流畅的动画效果</li>
                    <li>• 响应式设计</li>
                    <li>• 多种混合模式</li>
                </ul>
                <Link
                    href="/background-gradient/examples"
                    className="inline-flex items-center gap-2 w-full px-3 py-2 bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 text-xs font-medium rounded text-center justify-center"
                >
                    <span>查看详细示例</span>
                    <span>→</span>
                </Link>
            </div>

            {/* 当前演示 */}
            <div className="relative">
                {demos[currentDemo].component}
            </div>
        </div>
    );
}
