import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt = `${SITE.name} — ${SITE.primaryRole}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(1200px 600px at 80% -10%, rgba(56,189,248,0.35), transparent), radial-gradient(900px 600px at 0% 110%, rgba(37,99,235,0.35), transparent), #04091a',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#60a5fa',
            fontSize: 26,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#34d399' }} />
          {SITE.team} · {SITE.company}
        </div>

        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          {SITE.name}
        </div>

        <div
          style={{
            fontSize: 46,
            fontWeight: 600,
            marginTop: 8,
            background: 'linear-gradient(90deg, #60a5fa, #0ea5e9)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {SITE.primaryRole}
        </div>

        <div style={{ fontSize: 30, color: '#94a3b8', marginTop: 32, maxWidth: 900 }}>
          Data science, business intelligence, product ownership, and workflow automation.
        </div>

        <div style={{ position: 'absolute', bottom: 72, left: 80, fontSize: 26, color: '#64748b' }}>
          {SITE.url.replace('https://', '')}
        </div>
      </div>
    ),
    { ...size }
  )
}
