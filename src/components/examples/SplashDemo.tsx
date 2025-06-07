'use client';

import React from 'react';
import { SplashCursor } from '@/components/ui/splash-cursor';

const SplashDemo: React.FC = () => {
    return (
        <div className="w-full h-screen bg-black relative">
            <SplashCursor />
            <div className="relative z-40 h-full flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Splash Cursor Demo</h1>
                    <p className="text-lg text-white/70">Move your mouse to see the fluid effect</p>
                </div>
            </div>
        </div>
    );
};

export default SplashDemo;
