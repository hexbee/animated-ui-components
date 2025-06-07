import { GradientText } from "@/components/ui/gradient-text";

export default function GradientTestPage() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-8">
            <div className="text-center space-y-8">
                <h1 className="text-6xl font-bold">
                    <GradientText>Hello World!</GradientText>
                </h1>
                
                <h2 className="text-4xl font-bold">
                    This is <GradientText>amazing</GradientText> text
                </h2>
                
                <p className="text-2xl">
                    <GradientText>渐变文字效果测试</GradientText>
                </p>
                
                <div className="mt-8">
                    <a href="/gradient" className="text-blue-600 hover:underline">
                        ← 返回完整示例页面
                    </a>
                </div>
            </div>
        </div>
    );
}
