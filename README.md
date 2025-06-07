# UI Components 演示项目

这是一个展示多种 UI 组件效果的 Next.js 项目，包含 Text Shimmer、Gradient Text、macOS Dock、Sign-In Card、Sign-Up Card、Hero Futuristic、Splash Cursor 和 Background Gradient Animation 组件，使用了来自 21st.dev 的第三方 shadcn/ui 组件。

## 🚀 SEO 优化

本项目已经过全面的 SEO 优化，包括：

### 📊 审计评分

- **可访问性 (Accessibility)**: 100/100 ✅
- **SEO**: 90/100 ✅
- **最佳实践 (Best Practices)**: 100/100 ✅
- **性能 (Performance)**: 78/100 ⚠️

### 🔧 SEO 功能

- ✅ 完整的 Meta 标签配置（title, description, keywords）
- ✅ Open Graph 社交媒体分享优化
- ✅ Twitter Card 支持
- ✅ 自动生成的 sitemap.xml
- ✅ 搜索引擎友好的 robots.txt
- ✅ JSON-LD 结构化数据
- ✅ 动态 OG 图片生成
- ✅ 多语言支持（中文）
- ✅ Canonical URL 配置
- ✅ 图片优化（Next.js Image 组件）
- ✅ 自定义 favicon 和 Apple Touch 图标

### 📁 SEO 相关文件

- `src/app/sitemap.ts` - 自动生成站点地图
- `src/app/robots.ts` - 搜索引擎爬取规则
- `src/app/opengraph-image.tsx` - 动态 OG 图片
- `src/app/icon.tsx` - 动态 favicon
- `src/app/apple-icon.tsx` - Apple Touch 图标
- 各页面的 `layout.tsx` 或页面级 metadata 配置

## ✨ 特性

### Text Shimmer 组件

- 🎨 **美丽的文字闪烁效果** - 基于 Framer Motion 的流畅动画
- 🌙 **深色模式支持** - 自动适配系统主题
- 📱 **响应式设计** - 在所有设备上完美显示
- ⚙️ **可自定义参数** - 支持调整动画持续时间和扩散范围
- 🎯 **支持 CSS 变量自定义** - 灵活的颜色配置

### Gradient Text 组件

- ✨ **动态渐变动画** - 多彩渐变背景动画效果
- 🎭 **混合模式渲染** - 智能的颜色混合技术
- 🔄 **无限循环动画** - 持续的视觉吸引力
- 🎨 **多色彩组合** - 丰富的颜色变化
- 📐 **灵活的元素支持** - 支持任意 HTML 元素

### macOS Dock 组件

- 🖥️ **真实的 macOS 体验** - 基于余弦函数的磁性放大算法
- 🎯 **精确的交互反馈** - 完全还原 macOS Dock 的交互效果
- 📱 **响应式设计** - 自动适配不同屏幕尺寸
- ⚡ **60fps 流畅动画** - 支持点击反弹效果和应用状态指示器
- 🎨 **毛玻璃效果** - 真实的背景模糊和透明度效果
- 🔄 **状态管理** - 支持应用运行状态切换和视觉指示

### Sign-In Card 2 组件

- 🎨 **3D 卡片效果** - 基于鼠标位置的动态 3D 旋转
- ✨ **动态边框光效** - 流动的光束边框动画
- 🌟 **毛玻璃背景** - 现代化的半透明背景效果
- 🔐 **完整登录表单** - 包含邮箱、密码输入和记住我功能
- 👁️ **密码可见性切换** - 支持显示/隐藏密码
- 🎭 **加载状态动画** - 优雅的提交加载效果
- 🌙 **深色主题设计** - 专为深色背景优化
- ⚡ **流畅交互反馈** - 基于 Framer Motion 的高性能动画

### Sign-Up Card 组件

- 🎨 **蓝绿色主题** - 与登录卡片区分的独特配色方案
- ✨ **3D 卡片效果** - 继承登录卡片的动态 3D 旋转效果
- 🌟 **动态边框光效** - 相同的流动光束边框动画
- 📝 **完整注册表单** - 包含姓名、邮箱、密码和确认密码
- 🔐 **双重密码验证** - 密码和确认密码的可见性切换
- 📋 **服务条款同意** - 带有链接的条款和隐私政策复选框
- 🎭 **加载状态动画** - 与登录卡片一致的提交动画
- 🌙 **深色主题设计** - 专为深色背景优化的蓝绿色调

### Hero Futuristic 组件

- 🚀 **WebGPU 渲染技术** - 使用最新的 WebGPU 渲染引擎
- ✨ **动态扫描效果** - 实时的红色扫描线动画效果
- 🎨 **Bloom 后处理** - 专业级的光晕和发光效果
- 🌟 **3D 纹理映射** - 复杂的深度图和纹理混合
- ⚡ **实时鼠标交互** - 鼠标移动影响 3D 场景渲染
- 📝 **打字机文字动画** - 逐字显示的标题动画效果
- 🎭 **科幻风格设计** - 未来主义的视觉风格
- 🔥 **高性能渲染** - 基于 Three.js 和 React Three Fiber

### Splash Cursor 组件

- 🌊 **流体动力学模拟** - 基于 Navier-Stokes 方程的实时流体模拟
- 🎨 **WebGL 渲染** - 硬件加速的高性能图形渲染
- 🖱️ **鼠标交互** - 实时响应鼠标移动和点击事件
- 🌈 **动态颜色** - 自动生成的彩色流体效果
- 📱 **触摸支持** - 完整的移动设备触摸交互
- ⚡ **高性能计算** - 优化的着色器程序和内存管理
- 🎭 **全屏覆盖** - 固定定位的全屏流体效果层
- 🔧 **可配置参数** - 支持自定义模拟精度和视觉效果

### Background Gradient Animation 组件

- 🎨 **动态渐变背景** - 美丽的多色彩渐变动画效果
- 🖱️ **鼠标交互** - 可选的鼠标跟随和交互效果
- 🎭 **多种混合模式** - 支持不同的颜色混合和渲染模式
- 🌈 **自定义颜色** - 完全可配置的渐变颜色和动画参数
- 📱 **响应式设计** - 自动适配各种屏幕尺寸和设备
- ⚡ **高性能渲染** - 使用 CSS 动画和 GPU 加速优化
- 🌙 **浏览器兼容** - 针对 Safari 等浏览器特别优化
- 🔧 **灵活配置** - 支持自定义尺寸、速度和视觉效果

### 通用特性

- 🚀 **TypeScript 支持** - 完整的类型安全
- 🎯 **多种示例** - 展示不同配置的效果
- ⚡ **基于 Framer Motion** - 高性能动画库

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## � 页面导航

- **主页** - http://localhost:3000 - 组件展示和导航中心
- **Text Shimmer** - http://localhost:3000/text-shimmer - 文字闪烁动画效果
- **Gradient Text** - http://localhost:3000/gradient - 渐变文字效果
- **macOS Dock** - http://localhost:3000/dock - macOS Dock 交互效果
- **Sign-In Card** - http://localhost:3000/sign-in - 3D 登录卡片
- **Sign-Up Card** - http://localhost:3000/signup - 3D 注册卡片
- **Hero Futuristic** - http://localhost:3000/hero - 未来主义英雄区域
- **Splash Cursor** - http://localhost:3000/splash - 流体动力学光标效果
- **Background Gradient** - http://localhost:3000/background-gradient/simple - 背景渐变动画效果

### 背景渐变动画子页面

- **简单示例** - http://localhost:3000/background-gradient/simple - 基础背景渐变效果
- **多种配置** - http://localhost:3000/background-gradient/examples - 各种配置选项展示
- **测试页面** - http://localhost:3000/background-gradient/test - 快速测试页面

## �📦 组件安装

### Text Shimmer 组件

这个项目已经包含了 Text Shimmer 组件，如果你想在其他项目中使用，可以通过以下命令安装：

```bash
# 首先初始化 shadcn/ui
npx shadcn@latest init

# 然后添加 Text Shimmer 组件
npx shadcn@latest add "https://21st.dev/r/ibelick/text-shimmer?api_key=YOUR_API_KEY"
```

### Gradient Text 组件

```bash
# 添加 Gradient Text 组件
npx shadcn@latest add "https://21st.dev/r/designali-in/gradient-text?api_key=YOUR_API_KEY"
```

### macOS Dock 组件

```bash
# 添加 macOS Dock 组件
npx shadcn@latest add "https://21st.dev/r/dhmnpunit/mac-os-dock?api_key=YOUR_API_KEY"
```

### Sign-In Card 2 组件

```bash
# 添加 Sign-In Card 2 组件
npx shadcn@latest add "https://21st.dev/r/jatin-yadav05/sign-in-card-2?api_key=YOUR_API_KEY"
```

### Sign-Up Card 组件

Sign-Up Card 组件是基于 Sign-In Card 2 组件自定义开发的注册卡片，无需额外安装。

### Hero Futuristic 组件

```bash
# 添加 Hero Futuristic 组件
npx shadcn@latest add "https://21st.dev/r/larsen66/hero-futuristic?api_key=YOUR_API_KEY"

# 安装必要的依赖
npm install three @react-three/fiber @react-three/drei
```

### Splash Cursor 组件

```bash
# 添加 Splash Cursor 组件
npx shadcn@latest add "https://21st.dev/r/davidhzdev/splash-cursor?api_key=YOUR_API_KEY"
```

### Background Gradient Animation 组件

```bash
# 添加 Background Gradient Animation 组件
npx shadcn@latest add "https://21st.dev/r/aceternity/background-gradient-animation?api_key=YOUR_API_KEY"
```

## 🎯 基本用法

### Text Shimmer 组件

```tsx
import { TextShimmer } from "@/components/ui/text-shimmer";

export default function Example() {
  return (
    <TextShimmer as="h1" className="text-4xl font-bold" duration={2} spread={2}>
      Your Text Here
    </TextShimmer>
  );
}
```

### Gradient Text 组件

```tsx
import { GradientText } from "@/components/ui/gradient-text";

export default function GradientExample() {
  return (
    <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Design <GradientText>without</GradientText> Limits
    </h1>
  );
}
```

### macOS Dock 组件

```tsx
"use client";

import React, { useState } from "react";
import MacOSDock from "@/components/mac-os-dock";

const sampleApps = [
  {
    id: "finder",
    name: "Finder",
    icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024",
  },
  {
    id: "safari",
    name: "Safari",
    icon: "https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024",
  },
  // ... 更多应用
];

export default function DockExample() {
  const [openApps, setOpenApps] = useState<string[]>(["finder"]);

  const handleAppClick = (appId: string) => {
    setOpenApps((prev) =>
      prev.includes(appId)
        ? prev.filter((id) => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <MacOSDock
        apps={sampleApps}
        onAppClick={handleAppClick}
        openApps={openApps}
      />
    </div>
  );
}
```

### Sign-In Card 2 组件

```tsx
import { Component as SignInCard } from "@/components/ui/sign-in-card-2";

export default function SignInExample() {
  return (
    <div className="min-h-screen">
      <SignInCard />
    </div>
  );
}
```

### Sign-Up Card 组件

```tsx
import { SignUpCard } from "@/components/ui/sign-up-card";

export default function SignUpExample() {
  return (
    <div className="min-h-screen">
      <SignUpCard />
    </div>
  );
}
```

### Hero Futuristic 组件

```tsx
import { HeroFuturistic } from "@/components/ui/hero-futuristic";

export default function HeroExample() {
  return (
    <div className="min-h-screen">
      <HeroFuturistic />
    </div>
  );
}
```

### Splash Cursor 组件

```tsx
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function SplashExample() {
  return (
    <div className="relative min-h-screen">
      <SplashCursor />
      {/* Your content here */}
    </div>
  );
}
```

### Background Gradient Animation 组件

```tsx
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function BackgroundExample() {
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
```

## 📋 属性说明

### Text Shimmer 属性

| 属性        | 类型                | 默认值 | 描述                               |
| ----------- | ------------------- | ------ | ---------------------------------- |
| `children`  | `string`            | -      | 要显示的文本内容                   |
| `as`        | `React.ElementType` | `'p'`  | HTML 元素类型 (h1, h2, p, span 等) |
| `className` | `string`            | -      | 自定义 CSS 类名                    |
| `duration`  | `number`            | `2`    | 动画持续时间（秒）                 |
| `spread`    | `number`            | `2`    | 闪烁扩散范围                       |

### macOS Dock 属性

| 属性         | 类型                                              | 默认值 | 描述                   |
| ------------ | ------------------------------------------------- | ------ | ---------------------- |
| `apps`       | `Array<{id: string, name: string, icon: string}>` | -      | 应用列表数组           |
| `onAppClick` | `(appId: string) => void`                         | -      | 应用点击回调函数       |
| `openApps`   | `string[]`                                        | `[]`   | 当前运行的应用 ID 列表 |
| `className`  | `string`                                          | -      | 自定义 CSS 类名        |

### Gradient Text 属性

| 属性        | 类型                | 默认值   | 描述                               |
| ----------- | ------------------- | -------- | ---------------------------------- |
| `children`  | `ReactNode`         | -        | 要显示的内容                       |
| `as`        | `React.ElementType` | `'span'` | HTML 元素类型 (h1, h2, p, span 等) |
| `className` | `string`            | -        | 自定义 CSS 类名                    |

### Sign-In Card 2 属性

Sign-In Card 2 组件是一个完整的登录卡片，无需额外属性配置，开箱即用。组件内部包含：

- 邮箱和密码输入框
- 记住我复选框
- 忘记密码链接
- 登录按钮（带加载状态）
- Google 登录按钮
- 注册链接

### Sign-Up Card 属性

Sign-Up Card 组件同样是一个完整的注册卡片，无需额外属性配置，开箱即用。组件内部包含：

- 姓名输入框（名字和姓氏）
- 邮箱输入框
- 密码输入框（带可见性切换）
- 确认密码输入框（带可见性切换）
- 服务条款和隐私政策同意复选框
- 注册按钮（带加载状态）
- Google 注册按钮
- 登录链接

### Hero Futuristic 属性

Hero Futuristic 组件是一个完整的英雄区域组件，无需额外属性配置，开箱即用。组件特性：

- WebGPU 渲染的 3D 场景
- 动态扫描线效果
- Bloom 后处理光效
- 鼠标交互响应
- 打字机文字动画
- 科幻风格按钮
- 全屏沉浸式体验

### Splash Cursor 属性

Splash Cursor 组件支持多种可配置参数来自定义流体效果：

- `SIM_RESOLUTION` (默认: 128) - 流体模拟分辨率
- `DYE_RESOLUTION` (默认: 1440) - 染料渲染分辨率
- `DENSITY_DISSIPATION` (默认: 3.5) - 密度消散速度
- `VELOCITY_DISSIPATION` (默认: 2) - 速度消散速度
- `PRESSURE` (默认: 0.1) - 压力强度
- `CURL` (默认: 3) - 涡流强度
- `SPLAT_RADIUS` (默认: 0.2) - 飞溅半径
- `SPLAT_FORCE` (默认: 6000) - 飞溅力度
- `SHADING` (默认: true) - 是否启用阴影
- `COLOR_UPDATE_SPEED` (默认: 10) - 颜色更新速度
- `TRANSPARENT` (默认: true) - 是否透明背景

## 🎨 使用示例

### Text Shimmer 示例

#### 快速闪烁效果

```tsx
<TextShimmer
  className="text-2xl font-bold text-blue-600"
  duration={1}
  spread={1}
>
  Lightning Fast
</TextShimmer>
```

#### 慢速优雅效果

```tsx
<TextShimmer
  className="text-2xl font-bold text-purple-600"
  duration={4}
  spread={4}
>
  Smooth & Elegant
</TextShimmer>
```

#### 中文文本

```tsx
<TextShimmer
  className="text-2xl font-bold text-green-600"
  duration={2.5}
  spread={2}
>
  闪闪发光的文字
</TextShimmer>
```

#### 自定义颜色效果

```tsx
<TextShimmer
  duration={1.2}
  className="text-xl font-medium
    [--base-color:theme(colors.blue.600)]
    [--base-gradient-color:theme(colors.blue.200)]
    dark:[--base-color:theme(colors.blue.700)]
    dark:[--base-gradient-color:theme(colors.blue.400)]"
>
  Hi, how are you?
</TextShimmer>
```

### Gradient Text 示例

#### 基础用法

```tsx
<h1 className="text-4xl font-bold">
  Design <GradientText>without</GradientText> Limits
</h1>
```

#### 大标题效果

```tsx
<h1 className="text-6xl font-bold">
  <GradientText>Amazing</GradientText>
</h1>
```

#### 中文文本

```tsx
<h2 className="text-3xl font-bold">
  创造<GradientText>无限</GradientText>可能
</h2>
```

#### 不同元素类型

```tsx
{
  /* 作为 span */
}
<p>
  This is <GradientText as="span">gradient</GradientText> text
</p>;

{
  /* 作为 div */
}
<GradientText as="div" className="text-xl font-bold">
  Block Element
</GradientText>;

{
  /* 作为 h3 */
}
<GradientText as="h3" className="text-2xl font-bold">
  Heading
</GradientText>;
```

## 🛠️ 技术栈

- **Next.js 15** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **shadcn/ui** - UI 组件库

## 📁 项目结构

```
ui-test/
├── src/
│   ├── app/                      # Next.js App Router 页面
│   │   ├── background-gradient/  # 背景渐变动画示例
│   │   │   ├── examples/
│   │   │   │   └── page.tsx      # 多种配置示例
│   │   │   ├── simple/
│   │   │   │   └── page.tsx      # 简单示例
│   │   │   ├── test/
│   │   │   │   └── page.tsx      # 测试页面
│   │   │   ├── README.md         # 组件说明文档
│   │   │   └── page.tsx          # 主示例页面
│   │   ├── dock/
│   │   │   └── page.tsx          # macOS Dock 示例页面
│   │   ├── gradient/
│   │   │   └── page.tsx          # Gradient Text 示例页面
│   │   ├── gradient-test/
│   │   │   └── page.tsx          # Gradient Text 测试页面
│   │   ├── hero/
│   │   │   └── page.tsx          # Hero Futuristic 示例页面
│   │   ├── sign-in/
│   │   │   └── page.tsx          # Sign-In Card 示例页面
│   │   ├── signup/
│   │   │   └── page.tsx          # Sign-Up Card 示例页面
│   │   ├── splash/
│   │   │   └── page.tsx          # Splash Cursor 示例页面
│   │   ├── text-shimmer/
│   │   │   └── page.tsx          # Text Shimmer 示例页面
│   │   ├── favicon.ico           # 网站图标
│   │   ├── globals.css           # 全局样式
│   │   ├── layout.tsx            # 根布局组件
│   │   └── page.tsx              # 主页面
│   ├── components/               # React 组件
│   │   ├── examples/             # 示例组件
│   │   │   ├── background-gradient-animation-demo.tsx
│   │   │   ├── DockDemo.tsx
│   │   │   ├── GradientTextDemo.tsx
│   │   │   ├── HeroDemo.tsx
│   │   │   ├── SignInDemo.tsx
│   │   │   ├── SignUpDemo.tsx
│   │   │   ├── SplashDemo.tsx
│   │   │   ├── TextShimmerColor.tsx
│   │   │   └── TextShimmerDemo.tsx
│   │   └── ui/                   # UI 组件库
│   │       ├── background-gradient-animation.tsx
│   │       ├── gradient-text.tsx
│   │       ├── hero-futuristic.tsx
│   │       ├── mac-os-dock.tsx
│   │       ├── sign-in-card-2.tsx
│   │       ├── sign-up-card.tsx
│   │       ├── splash-cursor.tsx
│   │       └── text-shimmer.tsx
│   └── lib/                      # 工具函数
│       └── utils.ts              # 通用工具函数
├── public/                       # 静态资源
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── components.json               # shadcn/ui 配置
├── eslint.config.mjs            # ESLint 配置
├── next.config.ts               # Next.js 配置
├── next-env.d.ts                # Next.js 类型定义
├── package.json                 # 项目依赖
├── package-lock.json            # 依赖锁定文件
├── postcss.config.mjs           # PostCSS 配置
├── tsconfig.json                # TypeScript 配置
└── tsconfig.tsbuildinfo         # TypeScript 构建信息
```

## 🎨 自定义样式

Text Shimmer 组件使用 CSS 变量来控制颜色和效果：

```css
/* 浅色模式 */
--base-color: #a1a1aa
--base-gradient-color: #000

/* 深色模式 */
--base-color: #71717a
--base-gradient-color: #ffffff
```

### 自定义颜色方法

#### 方法一：使用 Tailwind 主题颜色

```tsx
<TextShimmer className="[--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)]">
  Your Text
</TextShimmer>
```

#### 方法二：使用十六进制颜色

```tsx
<TextShimmer className="[--base-color:#3b82f6] [--base-gradient-color:#dbeafe]">
  Your Text
</TextShimmer>
```

#### 方法三：深色模式适配

```tsx
<TextShimmer className="[--base-color:theme(colors.red.600)] dark:[--base-color:theme(colors.red.700)]">
  Your Text
</TextShimmer>
```

### 颜色选择建议

- **基础颜色** (`--base-color`)：选择较深的色调（如 600-700），作为文字的主要颜色
- **高亮颜色** (`--base-gradient-color`)：选择较浅的色调（如 200-400），作为闪烁时的高亮效果
- **对比度**：确保基础颜色与背景有足够的对比度以保证可读性
- **深色模式**：为深色模式单独设置颜色，通常需要调整颜色的明暗度

### 更多示例

访问 [/text-shimmer](/text-shimmer) 页面查看更多自定义颜色效果的完整示例。

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如果你有任何问题或建议，请创建一个 Issue。
