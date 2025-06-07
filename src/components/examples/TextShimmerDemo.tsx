'use client';

import React from 'react';
import { TextShimmer } from '@/components/ui/text-shimmer';

const TextShimmerDemo: React.FC = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
            <div className="text-center space-y-8">
                <TextShimmer
                    as="h1"
                    className="text-6xl md:text-8xl font-bold"
                    duration={3}
                    spread={3}
                >
                    Text Shimmer
                </TextShimmer>
                
                <TextShimmer
                    as="p"
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
                    duration={2.5}
                    spread={2}
                >
                    Beautiful animated text effects
                </TextShimmer>
            </div>
        </div>
    );
};

export default TextShimmerDemo;
