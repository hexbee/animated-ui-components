import { TextShimmer } from "@/components/ui/text-shimmer";
import Link from "next/link";
import type { Metadata } from "next";
import { getFullUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Text Shimmer - 文字闪烁动画效果 | Animated UI Components",
  description: "探索Text Shimmer组件的各种文字闪烁动画效果，支持自定义颜色、动画速度和深色模式。基于Framer Motion构建的高性能文字动画组件。",
  keywords: ["Text Shimmer", "文字动画", "闪烁效果", "React组件", "Framer Motion", "自定义颜色", "动画效果", "UI组件"],
  openGraph: {
    title: "Text Shimmer - 文字闪烁动画效果 | Animated UI Components",
    description: "探索Text Shimmer组件的各种文字闪烁动画效果，支持自定义颜色、动画速度和深色模式",
    url: getFullUrl("/text-shimmer"),
    images: [
      {
        url: "/og-text-shimmer.png",
        width: 1200,
        height: 630,
        alt: "Text Shimmer 文字闪烁动画效果演示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Shimmer - 文字闪烁动画效果",
    description: "探索Text Shimmer组件的各种文字闪烁动画效果，支持自定义颜色、动画速度和深色模式",
    images: ["/og-text-shimmer.png"],
  },
  alternates: {
    canonical: getFullUrl("/text-shimmer"),
  },
};

export default function TextShimmerPage() {
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

                {/* 主标题 */}
                <div className="text-center mb-12">
                    <TextShimmer 
                        as="h1" 
                        className="text-5xl md:text-7xl font-bold mb-4"
                        duration={2.5}
                        spread={3}
                    >
                        Text Shimmer
                    </TextShimmer>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Beautiful animated text effects for your React applications
                    </p>
                </div>

                {/* 基础示例区域 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            快速闪烁效果
                        </h3>
                        <TextShimmer
                            className="text-2xl font-bold [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                            duration={1}
                            spread={1}
                        >
                            Lightning Fast
                        </TextShimmer>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            慢速闪烁效果
                        </h3>
                        <TextShimmer
                            className="text-2xl font-bold [--base-color:theme(colors.purple.600)] [--base-gradient-color:theme(colors.purple.200)] dark:[--base-color:theme(colors.purple.700)] dark:[--base-gradient-color:theme(colors.purple.400)]"
                            duration={4}
                            spread={4}
                        >
                            Smooth & Elegant
                        </TextShimmer>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            自定义颜色效果
                        </h3>
                        <TextShimmer
                            duration={1.2}
                            className="text-xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                        >
                            Hi, how are you?
                        </TextShimmer>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            中文文本效果
                        </h3>
                        <TextShimmer
                            className="text-2xl font-bold [--base-color:theme(colors.green.600)] [--base-gradient-color:theme(colors.green.200)] dark:[--base-color:theme(colors.green.700)] dark:[--base-gradient-color:theme(colors.green.400)]"
                            duration={2.5}
                            spread={2}
                        >
                            闪闪发光的文字
                        </TextShimmer>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            长文本效果
                        </h3>
                        <TextShimmer
                            className="text-lg font-medium [--base-color:theme(colors.red.600)] [--base-gradient-color:theme(colors.red.200)] dark:[--base-color:theme(colors.red.700)] dark:[--base-gradient-color:theme(colors.red.400)]"
                            duration={3}
                            spread={1.5}
                        >
                            This is a longer text to demonstrate the shimmer effect
                        </TextShimmer>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            渐变色效果
                        </h3>
                        <TextShimmer
                            className="text-xl font-bold [--base-color:theme(colors.emerald.500)] [--base-gradient-color:theme(colors.emerald.100)] dark:[--base-color:theme(colors.emerald.600)] dark:[--base-gradient-color:theme(colors.emerald.300)]"
                            duration={2}
                            spread={2}
                        >
                            Beautiful Gradient
                        </TextShimmer>
                    </div>
                </div>

                {/* 颜色主题示例 */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                        颜色主题示例
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 红色主题 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                红色主题
                            </h3>
                            <TextShimmer
                                duration={1.5}
                                className="text-xl font-medium [--base-color:theme(colors.red.600)] [--base-gradient-color:theme(colors.red.200)] dark:[--base-color:theme(colors.red.700)] dark:[--base-gradient-color:theme(colors.red.400)]"
                            >
                                Passionate Red
                            </TextShimmer>
                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                                <code>
                                    {`[--base-color:theme(colors.red.600)]
[--base-gradient-color:theme(colors.red.200)]`}
                                </code>
                            </div>
                        </div>

                        {/* 绿色主题 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                绿色主题
                            </h3>
                            <TextShimmer
                                duration={1.8}
                                className="text-xl font-medium [--base-color:theme(colors.emerald.600)] [--base-gradient-color:theme(colors.emerald.200)] dark:[--base-color:theme(colors.emerald.700)] dark:[--base-gradient-color:theme(colors.emerald.400)]"
                            >
                                Fresh Green
                            </TextShimmer>
                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                                <code>
                                    {`[--base-color:theme(colors.emerald.600)]
[--base-gradient-color:theme(colors.emerald.200)]`}
                                </code>
                            </div>
                        </div>

                        {/* 紫色主题 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                紫色主题
                            </h3>
                            <TextShimmer
                                duration={2}
                                className="text-xl font-medium [--base-color:theme(colors.purple.600)] [--base-gradient-color:theme(colors.purple.200)] dark:[--base-color:theme(colors.purple.700)] dark:[--base-gradient-color:theme(colors.purple.400)]"
                            >
                                Mystic Purple
                            </TextShimmer>
                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                                <code>
                                    {`[--base-color:theme(colors.purple.600)]
[--base-gradient-color:theme(colors.purple.200)]`}
                                </code>
                            </div>
                        </div>

                        {/* 橙色主题 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                橙色主题
                            </h3>
                            <TextShimmer
                                duration={1.3}
                                className="text-xl font-medium [--base-color:theme(colors.orange.600)] [--base-gradient-color:theme(colors.orange.200)] dark:[--base-color:theme(colors.orange.700)] dark:[--base-gradient-color:theme(colors.orange.400)]"
                            >
                                Vibrant Orange
                            </TextShimmer>
                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                                <code>
                                    {`[--base-color:theme(colors.orange.600)]
[--base-gradient-color:theme(colors.orange.200)]`}
                                </code>
                            </div>
                        </div>

                        {/* 青色主题 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                青色主题
                            </h3>
                            <TextShimmer
                                duration={1.7}
                                className="text-xl font-medium [--base-color:theme(colors.cyan.600)] [--base-gradient-color:theme(colors.cyan.200)] dark:[--base-color:theme(colors.cyan.700)] dark:[--base-gradient-color:theme(colors.cyan.400)]"
                            >
                                Cool Cyan
                            </TextShimmer>
                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                                <code>
                                    {`[--base-color:theme(colors.cyan.600)]
[--base-gradient-color:theme(colors.cyan.200)]`}
                                </code>
                            </div>
                        </div>

                        {/* 蓝色主题 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                蓝色主题
                            </h3>
                            <TextShimmer
                                duration={1.2}
                                className="text-xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                            >
                                Ocean Blue
                            </TextShimmer>
                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                                <code>
                                    {`[--base-color:theme(colors.blue.600)]
[--base-gradient-color:theme(colors.blue.200)]`}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 使用说明 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                        如何使用 Text Shimmer
                    </h2>
                    <div className="text-left space-y-4 text-gray-600 dark:text-gray-300">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                            <code>{`import { TextShimmer } from "@/components/ui/text-shimmer";`}</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                            <code>{`<TextShimmer
    as="h1"
    className="text-4xl font-bold"
    duration={2}
    spread={2}
>
    Your Text Here
</TextShimmer>`}</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm mt-4">
                            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">自定义颜色示例：</h4>
                            <code className="text-xs">{`<TextShimmer
    duration={1.2}
    className="text-xl font-medium
        [--base-color:theme(colors.blue.600)]
        [--base-gradient-color:theme(colors.blue.200)]
        dark:[--base-color:theme(colors.blue.700)]
        dark:[--base-gradient-color:theme(colors.blue.400)]"
>
    Hi, how are you?
</TextShimmer>`}</code>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div>
                                <h4 className="font-semibold mb-2">属性说明：</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">as</code> - HTML 元素类型</li>
                                    <li><code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">className</code> - CSS 类名</li>
                                    <li><code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">duration</code> - 动画持续时间（秒）</li>
                                    <li><code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">spread</code> - 闪烁扩散范围</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">特性：</h4>
                                <ul className="space-y-1 text-sm">
                                    <li>✨ 支持深色模式</li>
                                    <li>🎨 可自定义颜色和动画参数</li>
                                    <li>📱 响应式设计</li>
                                    <li>⚡ 基于 Framer Motion</li>
                                    <li>🎯 支持 CSS 变量自定义</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">💡 颜色自定义技巧：</h4>
                            <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                                <li>• 使用 <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">--base-color</code> 设置基础文字颜色</li>
                                <li>• 使用 <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">--base-gradient-color</code> 设置闪烁高亮颜色</li>
                                <li>• 支持 Tailwind 主题颜色：<code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">theme(colors.blue.600)</code></li>
                                <li>• 可以为深色模式设置不同的颜色方案</li>
                            </ul>
                        </div>

                        {/* 自定义颜色使用指南 */}
                        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                                自定义颜色使用指南
                            </h3>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">CSS 变量说明</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">--base-color</code> - 文字的基础颜色</li>
                                            <li><code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">--base-gradient-color</code> - 闪烁高亮颜色</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">颜色选择建议</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li>• 基础颜色选择较深的色调（如 600-700）</li>
                                            <li>• 高亮颜色选择较浅的色调（如 200-400）</li>
                                            <li>• 深色模式下适当调整颜色深度</li>
                                            <li>• 保持足够的对比度以确保可读性</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
