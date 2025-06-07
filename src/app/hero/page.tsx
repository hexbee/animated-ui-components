'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// 懒加载Hero组件以提高性能
const HeroFuturistic = dynamic(
  () => import('@/components/ui/hero-futuristic').then(mod => ({ default: mod.HeroFuturistic })),
  {
    loading: () => (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading Hero Futuristic...</p>
          <p className="text-sm text-white/60 mt-2">正在加载3D渲染组件</p>
        </div>
      </div>
    ),
    ssr: false // 禁用服务端渲染以避免Three.js问题
  }
);

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
            <Suspense fallback={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-lg">Loading Hero Futuristic...</p>
                </div>
              </div>
            }>
              <HeroFuturistic />
            </Suspense>
        </div>
    );
}
