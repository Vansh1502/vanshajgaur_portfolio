import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
          color: '#ffffff',
          fontSize: 34,
          fontWeight: 800,
          fontFamily: 'monospace',
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        {SITE.initials}
      </div>
    ),
    { ...size }
  )
}
