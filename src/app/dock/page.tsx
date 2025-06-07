'use client';

import React, { useState, useEffect } from 'react';
import MacOSDock from '@/components/ui/mac-os-dock';
import Link from 'next/link';

// Sample app data with actual macOS-style icons
const sampleApps = [
  { 
    id: 'finder', 
    name: 'Finder', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024' 
  },
  { 
    id: 'calculator', 
    name: 'Calculator', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/calculator-2021-04-29.png?rf=1024' 
  },
  { 
    id: 'terminal', 
    name: 'Terminal', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024' 
  },
  { 
    id: 'mail', 
    name: 'Mail', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'notes', 
    name: 'Notes', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'safari', 
    name: 'Safari', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024' 
  },
  { 
    id: 'photos', 
    name: 'Photos', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024' 
  },
  { 
    id: 'music', 
    name: 'Music', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'calendar', 
    name: 'Calendar', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024' 
  },
];

const DockDemo: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [openApps, setOpenApps] = useState<string[]>(['finder', 'safari']);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAppClick = (appId: string) => {
    console.log('App clicked:', appId);
    
    // Toggle app in openApps array
    setOpenApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* macOS-style background with subtle pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Navigation */}
      <div className="absolute top-8 left-8 z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
        >
          ← 返回首页
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        {/* Title section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            macOS Dock
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            体验真实的 macOS Dock 效果，包含磁性放大动画和交互反馈
          </p>
        </div>

        {/* Dock container */}
        <div className="flex items-end justify-center w-full">
          <MacOSDock
            apps={sampleApps}
            onAppClick={handleAppClick}
            openApps={openApps}
          />
        </div>

        {/* Instructions */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-lg mb-4">
            将鼠标悬停在 Dock 上体验磁性放大效果
          </p>
          <p className="text-white/60 text-sm">
            点击应用图标可以切换运行状态（白色圆点表示应用正在运行）
          </p>
        </div>
      </div>

      {/* Features section */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">特性</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm">
            <div>
              <h4 className="font-medium mb-2">🎯 真实的 macOS 体验</h4>
              <p>基于余弦函数的磁性放大算法，完全还原 macOS Dock 的交互效果</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">📱 响应式设计</h4>
              <p>自动适配不同屏幕尺寸，在手机、平板和桌面设备上都有最佳体验</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">⚡ 流畅动画</h4>
              <p>60fps 流畅动画，支持点击反弹效果和应用状态指示器</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockDemo;
