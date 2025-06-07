# 背景渐变动画组件 (Background Gradient Animation)

一个美丽的动态背景渐变动画组件，支持自定义颜色、交互效果和多种配置选项。

## 特性

- 🎨 **可自定义颜色** - 支持自定义渐变背景和动画颜色
- 🖱️ **鼠标交互** - 可选的鼠标跟随效果
- 🎭 **多种混合模式** - 支持不同的颜色混合效果
- 📱 **响应式设计** - 适配各种屏幕尺寸
- ⚡ **高性能** - 使用 CSS 动画和 GPU 加速
- 🌙 **Safari 兼容** - 针对 Safari 浏览器优化

## 安装

使用 shadcn/ui CLI 安装：

```bash
npx shadcn@latest add "https://21st.dev/r/aceternity/background-gradient-animation?api_key=YOUR_API_KEY"
```

## 基础用法

```tsx
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BasicExample() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Hello World
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}
```

## 自定义配置

```tsx
<BackgroundGradientAnimation
    gradientBackgroundStart="rgb(255, 20, 147)"
    gradientBackgroundEnd="rgb(138, 43, 226)"
    firstColor="255, 105, 180"
    secondColor="255, 20, 147"
    thirdColor="138, 43, 226"
    fourthColor="75, 0, 130"
    fifthColor="255, 69, 0"
    pointerColor="140, 100, 255"
    size="90%"
    blendingValue="hard-light"
    interactive={true}
    containerClassName="h-screen"
>
    {/* 您的内容 */}
</BackgroundGradientAnimation>
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `gradientBackgroundStart` | `string` | `"rgb(108, 0, 162)"` | 背景渐变起始颜色 |
| `gradientBackgroundEnd` | `string` | `"rgb(0, 17, 82)"` | 背景渐变结束颜色 |
| `firstColor` | `string` | `"18, 113, 255"` | 第一个动画颜色 (RGB 值) |
| `secondColor` | `string` | `"221, 74, 255"` | 第二个动画颜色 (RGB 值) |
| `thirdColor` | `string` | `"100, 220, 255"` | 第三个动画颜色 (RGB 值) |
| `fourthColor` | `string` | `"200, 50, 50"` | 第四个动画颜色 (RGB 值) |
| `fifthColor` | `string` | `"180, 180, 50"` | 第五个动画颜色 (RGB 值) |
| `pointerColor` | `string` | `"140, 100, 255"` | 鼠标跟随颜色 (RGB 值) |
| `size` | `string` | `"80%"` | 动画元素大小 |
| `blendingValue` | `string` | `"hard-light"` | CSS 混合模式 |
| `interactive` | `boolean` | `true` | 是否启用鼠标交互 |
| `containerClassName` | `string` | - | 容器额外的 CSS 类名 |
| `className` | `string` | - | 内容区域额外的 CSS 类名 |
| `children` | `React.ReactNode` | - | 子组件内容 |

## 示例变体

### 1. 非交互式版本
```tsx
<BackgroundGradientAnimation
    interactive={false}
    size="50%"
    containerClassName="h-96"
>
    {/* 内容 */}
</BackgroundGradientAnimation>
```

### 2. 深色主题
```tsx
<BackgroundGradientAnimation
    gradientBackgroundStart="rgb(0, 0, 0)"
    gradientBackgroundEnd="rgb(30, 30, 30)"
    firstColor="100, 100, 255"
    secondColor="200, 100, 255"
    thirdColor="100, 200, 255"
    blendingValue="multiply"
>
    {/* 内容 */}
</BackgroundGradientAnimation>
```

### 3. 粉紫色主题
```tsx
<BackgroundGradientAnimation
    gradientBackgroundStart="rgb(255, 20, 147)"
    gradientBackgroundEnd="rgb(138, 43, 226)"
    firstColor="255, 105, 180"
    secondColor="255, 20, 147"
    thirdColor="138, 43, 226"
    fourthColor="75, 0, 130"
    fifthColor="255, 69, 0"
>
    {/* 内容 */}
</BackgroundGradientAnimation>
```

## 注意事项

1. **性能优化**: 组件使用 CSS 动画和 GPU 加速，性能良好
2. **Safari 兼容**: 自动检测 Safari 浏览器并应用兼容性优化
3. **响应式**: 默认为全屏显示，可通过 `containerClassName` 自定义尺寸
4. **颜色格式**: 动画颜色使用 RGB 数值格式 (如 "255, 0, 0")，背景颜色使用 CSS 颜色格式
5. **层级管理**: 内容需要设置 `z-50` 或更高的 z-index 以显示在动画之上

## 浏览器支持

- ✅ Chrome/Edge (推荐)
- ✅ Firefox
- ✅ Safari (自动优化)
- ✅ 移动端浏览器

## 相关链接

- [在线演示](/background-gradient)
- [详细示例](/background-gradient/examples)
- [21st.dev 组件库](https://21st.dev)
