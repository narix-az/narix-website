import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Narix — apps, websites and AI systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The image shared when a narix.az link is posted. It is rendered once, at
// build time, with the horizontal logo from the brand kit.
export default async function OpengraphImage() {
  const logo = `data:image/png;base64,${readFileSync(join(process.cwd(), 'public/brand/narix-logo.png')).toString('base64')}`;

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
            'radial-gradient(700px 500px at 95% -10%, rgba(45,107,255,0.26), transparent 60%),' +
            'radial-gradient(600px 450px at 70% 0%, rgba(255,46,126,0.20), transparent 60%),' +
            'radial-gradient(700px 500px at 100% 110%, rgba(122,60,255,0.28), transparent 60%)',
          color: '#0f0f14',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={logo} width={271} height={60} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 1040,
            }}
          >
            <span>We build apps, websites&nbsp;</span>
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg, #f04a0f 0%, #e81e72 45%, #6a2bf0 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              and AI systems
            </span>
          </div>
          <div style={{ fontSize: 28, color: '#2b2b35', maxWidth: 960 }}>
            One team from the first idea to a product running in production.
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
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Websites</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Apps</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>AI automation</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>DevOps</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>QA</span>
          </div>
          <div style={{ color: '#0f0f14', fontWeight: 700 }}>narix.az</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
