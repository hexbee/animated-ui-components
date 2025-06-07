import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Animated UI Components - 精美的React组件库'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0f172a',
                    backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%), linear-gradient(-45deg, #1e293b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e293b 75%), linear-gradient(-45deg, transparent 75%, #1e293b 75%)',
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        borderRadius: '24px',
                        padding: '60px',
                        border: '2px solid #334155',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textAlign: 'center',
                            marginBottom: '24px',
                        }}
                    >
                        Animated UI Components
                    </div>
                    <div
                        style={{
                            fontSize: '32px',
                            color: '#94a3b8',
                            textAlign: 'center',
                            marginBottom: '32px',
                            maxWidth: '800px',
                        }}
                    >
                        精美的React组件库 - 8个现代化UI组件展示
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {['Text Shimmer', 'Gradient Text', 'macOS Dock', '3D Cards'].map((item) => (
                            <div
                                key={item}
                                style={{
                                    backgroundColor: '#1e293b',
                                    color: '#e2e8f0',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    fontSize: '20px',
                                    border: '1px solid #334155',
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            fontSize: '18px',
                            color: '#64748b',
                            marginTop: '32px',
                            textAlign: 'center',
                        }}
                    >
                        Next.js 15 • React 19 • TypeScript • Tailwind CSS
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
