import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 72,
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ fontSize: '48px', marginBottom: '-8px' }}>UI</div>
                    <div style={{ fontSize: '16px', opacity: 0.9 }}>Components</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
