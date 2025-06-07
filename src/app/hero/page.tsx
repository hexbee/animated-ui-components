'use client';

import React from 'react';
import { HeroFuturistic } from '@/components/ui/hero-futuristic';
import Link from 'next/link';

export default function HeroPage() {
    return (
        <div className="relative">
            {/* Navigation */}
            <div className="absolute top-8 left-8 z-20">
                <Link 
                    href="/" 
                    className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
                >
                    ← 返回首页
                </Link>
            </div>

            {/* Info Panel */}
            <div className="absolute top-8 right-8 z-20 max-w-sm">
                <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-white/80 text-sm">
                    <h3 className="font-semibold mb-2 text-white">Hero Futuristic 组件</h3>
                    <ul className="space-y-1 text-xs">
                        <li>🚀 WebGPU 渲染技术</li>
                        <li>✨ 动态扫描效果</li>
                        <li>🎨 Bloom 后处理效果</li>
                        <li>🌟 3D 纹理映射</li>
                        <li>⚡ 实时鼠标交互</li>
                        <li>📝 打字机文字动画</li>
                        <li>🎭 科幻风格设计</li>
                    </ul>
                </div>
            </div>

            {/* Hero Futuristic Component */}
            <HeroFuturistic />
        </div>
    );
}
