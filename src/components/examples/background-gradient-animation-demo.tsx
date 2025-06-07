import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Gradients X Animations
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}

export function BackgroundGradientAnimationCustomDemo() {
    return (
        <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(0, 17, 82)"
            gradientBackgroundEnd="rgb(108, 0, 162)"
            firstColor="255, 154, 158"
            secondColor="254, 207, 239"
            thirdColor="128, 222, 234"
            fourthColor="255, 183, 197"
            fifthColor="200, 162, 200"
            pointerColor="140, 100, 255"
            size="90%"
            blendingValue="hard-light"
            interactive={true}
        >
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <div className="text-center space-y-4">
                    <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/30">
                        自定义渐变
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-r from-pink-300 to-purple-300">
                        Interactive Background Animation
                    </p>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}

export function BackgroundGradientAnimationMinimalDemo() {
    return (
        <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(20, 20, 20)"
            gradientBackgroundEnd="rgb(40, 40, 40)"
            firstColor="100, 100, 255"
            secondColor="200, 100, 255"
            thirdColor="100, 200, 255"
            fourthColor="255, 100, 200"
            fifthColor="255, 200, 100"
            size="60%"
            blendingValue="multiply"
            interactive={false}
            containerClassName="h-96"
        >
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/40">
                        简约风格
                    </h2>
                    <p className="text-sm md:text-base text-white/70">
                        Non-interactive • Smaller size • Dark theme
                    </p>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}
