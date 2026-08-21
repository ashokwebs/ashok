import { ImageResponse } from 'next/og'

export const alt = 'Ashok Pasala — Founder & AI Systems Architect | Norveth'
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
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
          padding: '60px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              padding: '10px 24px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <div style={{ width: '10px', height: '10px', backgroundColor: '#10b981', borderRadius: '9999px' }} />
            <span style={{ fontSize: 18, color: '#e5e5e5', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Founder & Systems Architect — Norveth
            </span>
          </div>

          <h1
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              margin: 0,
              padding: 0,
              textAlign: 'center',
            }}
          >
            Ashok Pasala
          </h1>

          <p
            style={{
              fontSize: 32,
              color: '#a3a3a3',
              marginTop: '20px',
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            Autonomous AI Infrastructure • Multi-Agent Systems • Distributed Architecture
          </p>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '40px',
              fontSize: 18,
              color: '#737373',
            }}
          >
            <span>@ashokfounds</span>
            <span>•</span>
            <span>ashokpasala.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
