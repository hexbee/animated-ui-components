'use client';

import React from 'react';
import { SignUpCard } from '@/components/ui/sign-up-card';
import Link from 'next/link';

export default function SignUpPage() {
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
                    <h3 className="font-semibold mb-2 text-white">Sign-Up Card 组件</h3>
                    <ul className="space-y-1 text-xs">
                        <li>✨ 3D 卡片效果</li>
                        <li>🌟 动态边框光效</li>
                        <li>🎨 蓝绿色主题背景</li>
                        <li>⚡ 流畅的交互动画</li>
                        <li>📝 完整的注册表单</li>
                        <li>🔐 密码确认功能</li>
                        <li>📋 服务条款同意</li>
                    </ul>
                </div>
            </div>

            {/* Sign Up Card Component */}
            <SignUpCard />
        </div>
    );
}
