'use client';

import React from 'react';
import { Component as SignInCard } from '@/components/ui/sign-in-card-2';
import Link from 'next/link';

export default function SignInPage() {
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
                    <h3 className="font-semibold mb-2 text-white">Sign-In Card 2 组件</h3>
                    <ul className="space-y-1 text-xs">
                        <li>✨ 3D 卡片效果</li>
                        <li>🌟 动态边框光效</li>
                        <li>🎨 毛玻璃背景</li>
                        <li>⚡ 流畅的交互动画</li>
                        <li>🔐 完整的登录表单</li>
                    </ul>
                </div>
            </div>

            {/* Sign In Card Component */}
            <SignInCard />
        </div>
    );
}
