export default function BackgroundGradientTestPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">背景渐变动画测试</h1>
                <p className="text-white/70 mb-8">页面正在正常工作</p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                    ← 返回首页
                </a>
            </div>
        </div>
    );
}
