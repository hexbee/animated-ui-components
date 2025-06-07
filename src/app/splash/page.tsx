'use client';

import React from 'react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import Link from 'next/link';

export default function SplashPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Splash Cursor Component - 全屏流体效果 */}
            <SplashCursor />
            
            {/* Navigation */}
            <div className="absolute top-8 left-8 z-50">
                <Link 
                    href="/" 
                    className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
                >
                    ← 返回首页
                </Link>
            </div>

            {/* Info Panel */}
            <div className="absolute top-8 right-8 z-50 max-w-sm">
                <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-white/80 text-sm">
                    <h3 className="font-semibold mb-2 text-white">Splash Cursor 组件</h3>
                    <ul className="space-y-1 text-xs">
                        <li>🌊 流体动力学模拟</li>
                        <li>🎨 WebGL 实时渲染</li>
                        <li>🖱️ 鼠标交互响应</li>
                        <li>🌈 动态颜色生成</li>
                        <li>⚡ 高性能计算</li>
                        <li>📱 触摸屏支持</li>
                        <li>🎭 全屏沉浸体验</li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-40 min-h-screen flex items-center justify-center p-8">
                <div className="text-center space-y-8">
                    <h1 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tight">
                        Splash Cursor
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
                        Move your mouse or touch the screen to create beautiful fluid dynamics
                    </p>
                    
                    <div className="space-y-4 text-white/60">
                        <p className="text-lg">
                            🖱️ Move your mouse to create flowing effects
                        </p>
                        <p className="text-lg">
                            🖱️ Click to create splash bursts
                        </p>
                        <p className="text-lg">
                            📱 Touch and drag on mobile devices
                        </p>
                    </div>

                    {/* Interactive Demo Area */}
                    <div className="mt-12 p-8 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Interactive Demo Area
                        </h3>
                        <p className="text-white/70 mb-6">
                            This area is perfect for testing the fluid effects. Move your cursor here!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/60">
                            <div className="p-4 bg-white/10 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">Fluid Simulation</h4>
                                <p>Real-time Navier-Stokes equations</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">WebGL Rendering</h4>
                                <p>Hardware-accelerated graphics</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">Dynamic Colors</h4>
                                <p>Automatically generated color palette</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-12 text-left max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                            Technical Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    🌊 Fluid Dynamics
                                </h4>
                                <ul className="space-y-2 text-white/70 text-sm">
                                    <li>• Navier-Stokes equations simulation</li>
                                    <li>• Velocity and pressure fields</li>
                                    <li>• Vorticity confinement</li>
                                    <li>• Density advection</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    🎨 Visual Effects
                                </h4>
                                <ul className="space-y-2 text-white/70 text-sm">
                                    <li>• Dynamic color generation</li>
                                    <li>• Smooth particle interpolation</li>
                                    <li>• Transparency blending</li>
                                    <li>• Real-time shading</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    ⚡ Performance
                                </h4>
                                <ul className="space-y-2 text-white/70 text-sm">
                                    <li>• WebGL hardware acceleration</li>
                                    <li>• Optimized shader programs</li>
                                    <li>• Efficient memory management</li>
                                    <li>• 60 FPS smooth animation</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    🖱️ Interaction
                                </h4>
                                <ul className="space-y-2 text-white/70 text-sm">
                                    <li>• Mouse movement tracking</li>
                                    <li>• Click splash effects</li>
                                    <li>• Multi-touch support</li>
                                    <li>• Responsive design</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Usage Instructions */}
                    <div className="mt-12 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            How to Use
                        </h3>
                        <div className="text-left space-y-4 text-white/70">
                            <div className="bg-gray-900/50 rounded p-4 font-mono text-sm">
                                <code>{`import { SplashCursor } from "@/components/ui/splash-cursor";`}</code>
                            </div>
                            <div className="bg-gray-900/50 rounded p-4 font-mono text-sm">
                                <code>{`export function MyComponent() {
  return (
    <div className="relative">
      <SplashCursor />
      {/* Your content here */}
    </div>
  );
}`}</code>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <h4 className="font-semibold mb-2 text-white">可配置参数：</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li><code className="bg-gray-700 px-1 rounded">SIM_RESOLUTION</code> - 模拟分辨率</li>
                                        <li><code className="bg-gray-700 px-1 rounded">DYE_RESOLUTION</code> - 染料分辨率</li>
                                        <li><code className="bg-gray-700 px-1 rounded">SPLAT_FORCE</code> - 飞溅力度</li>
                                        <li><code className="bg-gray-700 px-1 rounded">CURL</code> - 涡流强度</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-white">特性：</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>🌊 实时流体模拟</li>
                                        <li>🎨 自动颜色生成</li>
                                        <li>📱 移动设备支持</li>
                                        <li>⚡ 高性能渲染</li>
                                        <li>🎯 全屏覆盖</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
