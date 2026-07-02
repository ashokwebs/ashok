import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ashok Pasala - Full Stack Developer & AI Systems Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
          backgroundColor: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ padding: '8px 24px', backgroundColor: '#f1f5f9', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#3b82f6', borderRadius: '9999px' }} />
            <span style={{ fontSize: 24, color: '#1e293b', fontWeight: 600 }}>Founder @ Norveth</span>
          </div>
          <h1 style={{ fontSize: 100, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.05em', margin: 0, padding: 0 }}>
            Ashok Pasala
          </h1>
          <p style={{ fontSize: 40, color: '#475569', marginTop: '24px', fontWeight: 400 }}>
            Full Stack Developer &bull; AI Systems Engineer
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
