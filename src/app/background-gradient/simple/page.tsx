import Link from "next/link";

export default function SimpleBackgroundGradientPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* 返回首页按钮 */}
            <div className="fixed top-4 left-4 z-50">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-black/30 transition-all duration-200 text-sm font-medium"
                >
                    <span>←</span>
                    <span>返回首页</span>
                </Link>
            </div>

            {/* 动画背景 */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* 内容 */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                            Background
                        </span>
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Gradient
                        </span>
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        简化版背景渐变动画效果
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/background-gradient/test"
                            className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                        >
                            测试页面
                        </Link>
                        <Link
                            href="/background-gradient/examples"
                            className="px-6 py-3 bg-purple-600/50 text-white rounded-lg hover:bg-purple-600/70 transition-colors"
                        >
                            详细示例
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
