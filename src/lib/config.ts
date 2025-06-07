/**
 * Application configuration utilities
 * Provides centralized access to environment variables and site configuration
 */

/**
 * Get the base URL for the application
 * Falls back to localhost:3000 if not configured
 */
export function getBaseUrl(): string {
    // In production, use VERCEL_URL or custom domain
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    
    // Use configured base URL or fallback to localhost
    return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

/**
 * Get site configuration
 */
export const siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Animated UI Components",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "探索精美的UI组件：Text Shimmer文字闪烁、Gradient Text渐变文字、macOS Dock交互、3D登录卡片、Hero Futuristic、流体光标效果等。基于Next.js 15、React 19、TypeScript和Tailwind CSS构建的现代化组件展示平台。",
    url: getBaseUrl(),
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@ui_components",
} as const;

/**
 * Generate a full URL from a path
 */
export function getFullUrl(path: string = ''): string {
    const baseUrl = getBaseUrl();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}
