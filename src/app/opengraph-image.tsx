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
          backgroundColor: '#0b0f19',
          backgroundImage:
            'radial-gradient(1200px 600px at 80% -10%, rgba(138,92,255,0.35), transparent 60%),' +
            'radial-gradient(900px 500px at -10% 110%, rgba(34,211,238,0.25), transparent 60%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #8a5cff 0%, #4d7bff 50%, #22d3ee 100%)',
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
            <div style={{ fontSize: 18, color: '#a0a8b8' }}>narix.az</div>
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
              background: 'rgba(138, 92, 255, 0.14)',
              border: '1px solid rgba(138, 92, 255, 0.4)',
              color: '#c4b5fd',
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
                  'linear-gradient(90deg, #8a5cff 0%, #4d7bff 50%, #22d3ee 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Run Your Business
            </span>
          </div>
          <div style={{ fontSize: 28, color: '#c8cfdc', maxWidth: 960 }}>
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
            color: '#a0a8b8',
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
          <div style={{ color: '#ffffff', fontWeight: 600 }}>narix.az</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
