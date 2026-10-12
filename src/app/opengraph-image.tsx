import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Narix — AI Systems That Run Your Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#faf8f5',
          backgroundImage:
            'radial-gradient(700px 500px at 95% -10%, rgba(255,46,126,0.35), transparent 60%),' +
            'radial-gradient(600px 450px at 70% 0%, rgba(255,91,31,0.30), transparent 60%),' +
            'radial-gradient(700px 500px at 100% 110%, rgba(122,60,255,0.30), transparent 60%)',
          color: '#0f0f14',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #ff5b1f 0%, #ff2e7e 50%, #7a3cff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 800,
              color: '#fff',
            }}
          >
            N
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>Narix</div>
            <div style={{ fontSize: 18, color: '#5e5e6b' }}>narix.az</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              padding: '8px 18px',
              borderRadius: 999,
              background: '#ffffff',
              border: '1px solid rgba(15, 15, 20, 0.1)',
              color: '#2b2b35',
              fontSize: 18,
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            AI Automation Studio
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 1040,
            }}
          >
            <span>AI Systems That&nbsp;</span>
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #f04a0f 0%, #e81e72 45%, #6a2bf0 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Run Your Business
            </span>
          </div>
          <div style={{ fontSize: 28, color: '#2b2b35', maxWidth: 960 }}>
            AI workflow automation, AI agents, analytics and modern web platforms —
            built for fast-moving teams in Azerbaijan and beyond.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#5e5e6b',
          }}
        >
          <div style={{ display: 'flex', gap: 28 }}>
            <span>AI Agents</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Workflow Automation</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>AI Analytics</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Web Development</span>
          </div>
          <div style={{ color: '#0f0f14', fontWeight: 700 }}>narix.az</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
