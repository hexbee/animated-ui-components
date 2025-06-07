import { GradientText } from "@/components/ui/gradient-text";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gradient Text - 动态渐变文字效果 | Animated UI Components",
  description: "探索 GradientText 组件的动态渐变文字效果，支持多彩渐变背景动画、混合模式渲染和无限循环动画。为您的应用添加令人惊艳的视觉体验。",
  keywords: ["Gradient Text", "渐变文字", "动态渐变", "文字动画", "React组件", "Framer Motion", "混合模式", "UI组件"],
  openGraph: {
    title: "Gradient Text - 动态渐变文字效果 | Animated UI Components",
    description: "探索 GradientText 组件的动态渐变文字效果，支持多彩渐变背景动画和混合模式渲染",
    url: "http://localhost:3000/gradient",
    images: [
      {
        url: "/og-gradient-text.png",
        width: 1200,
        height: 630,
        alt: "Gradient Text 动态渐变文字效果演示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gradient Text - 动态渐变文字效果",
    description: "探索 GradientText 组件的动态渐变文字效果，支持多彩渐变背景动画和混合模式渲染",
    images: ["/og-gradient-text.png"],
  },
  alternates: {
    canonical: "http://localhost:3000/gradient",
  },
};

export default function GradientPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
            <div className="max-w-6xl mx-auto">
                {/* 导航 */}
                <div className="mb-8">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← 返回首页
                    </Link>
                </div>

                {/* 标题 */}
                <div className="text-center mb-16">
                    <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl mb-6">
                        Design <GradientText>without</GradientText> Limits
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        探索 GradientText 组件的动态渐变文字效果，为您的应用添加令人惊艳的视觉体验
                    </p>
                </div>

                {/* 示例网格 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* 基础示例 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            基础用法
                        </h3>
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold">
                                Hello <GradientText>World</GradientText>
                            </h2>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm font-mono">
                            <code>{`<h2 className="text-3xl font-bold">
  Hello <GradientText>World</GradientText>
</h2>`}</code>
                        </div>
                    </div>

                    {/* 大标题示例 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            大标题效果
                        </h3>
                        <div className="text-center mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                <GradientText>Amazing</GradientText>
                            </h1>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm font-mono">
                            <code>{`<h1 className="text-4xl md:text-5xl font-bold">
  <GradientText>Amazing</GradientText>
</h1>`}</code>
                        </div>
                    </div>

                    {/* 混合文本示例 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            混合文本
                        </h3>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Build <GradientText>Beautiful</GradientText> Apps
                            </h2>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm font-mono">
                            <code>{`<h2 className="text-2xl md:text-3xl font-bold">
  Build <GradientText>Beautiful</GradientText> Apps
</h2>`}</code>
                        </div>
                    </div>

                    {/* 中文示例 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            中文文本
                        </h3>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                创造<GradientText>无限</GradientText>可能
                            </h2>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm font-mono">
                            <code>{`<h2 className="text-2xl md:text-3xl font-bold">
  创造<GradientText>无限</GradientText>可能
</h2>`}</code>
                        </div>
                    </div>
                </div>

                {/* 大型展示区域 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-12 shadow-lg mb-16">
                    <div className="text-center space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
                            <GradientText>Innovation</GradientText>
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Starts with <GradientText>Imagination</GradientText>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Experience the power of dynamic gradient animations that bring your text to life
                        </p>
                    </div>
                </div>

                {/* 不同元素类型示例 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                        不同元素类型
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">作为 span</h4>
                            <p className="text-xl">
                                This is <GradientText as="span">gradient</GradientText> text
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">作为 div</h4>
                            <GradientText as="div" className="text-xl font-bold">
                                Block Element
                            </GradientText>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">作为 h3</h4>
                            <GradientText as="h3" className="text-2xl font-bold">
                                Heading
                            </GradientText>
                        </div>
                    </div>
                </div>

                {/* 使用说明 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                        使用指南
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">安装</h3>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                                <code>npx shadcn@latest add &quot;https://21st.dev/r/designali-in/gradient-text?api_key=YOUR_API_KEY&quot;</code>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">导入</h3>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                                <code>import {`{ GradientText }`} from &quot;@/components/ui/gradient-text&quot;;</code>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">属性</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="text-left py-2 px-4">属性</th>
                                            <th className="text-left py-2 px-4">类型</th>
                                            <th className="text-left py-2 px-4">默认值</th>
                                            <th className="text-left py-2 px-4">描述</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 dark:text-gray-300">
                                        <tr className="border-b border-gray-100 dark:border-gray-700">
                                            <td className="py-2 px-4"><code>children</code></td>
                                            <td className="py-2 px-4">ReactNode</td>
                                            <td className="py-2 px-4">-</td>
                                            <td className="py-2 px-4">要显示的内容</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 dark:border-gray-700">
                                            <td className="py-2 px-4"><code>as</code></td>
                                            <td className="py-2 px-4">ElementType</td>
                                            <td className="py-2 px-4">&quot;span&quot;</td>
                                            <td className="py-2 px-4">HTML 元素类型</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 dark:border-gray-700">
                                            <td className="py-2 px-4"><code>className</code></td>
                                            <td className="py-2 px-4">string</td>
                                            <td className="py-2 px-4">-</td>
                                            <td className="py-2 px-4">自定义 CSS 类名</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">特性</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✨ 动态渐变动画效果</li>
                                <li>🎨 自动适配深色模式</li>
                                <li>📱 响应式设计</li>
                                <li>⚡ 基于 Framer Motion</li>
                                <li>🔧 支持任意 HTML 元素</li>
                                <li>🎯 混合模式渲染</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
