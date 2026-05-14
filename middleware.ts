import { next } from '@vercel/edge';

const BASE_URL = 'https://craftmindship.com';

const CRAWLER_RE =
  /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp/i;

const ogData: Record<string, { title: string; description: string; image: string }> = {
  '/': {
    title: 'Craftmindship — Luke Dang',
    description:
      "AI Product Builder and Technical Product Manager. Workflow-heavy SaaS with Supabase/RLS, real user pilots, and AI-assisted delivery.",
    image: '/images/logos/craftmindship-light.png',
  },
  '/work/cadence': {
    title: 'Cadence — Weekly Lesson Continuity for Music Teachers',
    description:
      'Live pilot app for music teacher-parent lesson continuity. Supabase/RLS, email OTP, parent-safe views, and real teacher pilot.',
    image: '/images/og/og-cadence.png',
  },
  '/work/puppy-program-os': {
    title: 'Puppy Program OS — Operational System for Dog Training',
    description:
      'Case study: systems thinking applied to a real operational workflow. Prototype built with AI-native development.',
    image: '/images/og/og-puppy-program.png',
  },
  '/work/multi-agent-workflow': {
    title: 'Multi-Agent Workflow — AI Orchestration for Production Software',
    description:
      'Case study: coordinating Claude Code, Codex, ChatGPT, and Playwright across planning, implementation, QA, and deployment.',
    image: '/images/og/og-multi-agent.png',
  },
  '/analysis/td-insurance-telematics': {
    title: 'TD Insurance Telematics — Product Teardown',
    description:
      'Proxy metric analysis of TD Advantage driving score. Incentive misalignment, aggregation logic critique, $744/year impact.',
    image: '/images/og/og-td-insurance.png',
  },
  '/analysis/coding-bootcamps-dying': {
    title: 'Why Coding Bootcamps Are Dying — And What Replaces Them',
    description:
      'Coffee Credit formula, business model analysis, and four futures as AI compresses the beginner layer.',
    image: '/images/og/og-coding-bootcamps.png',
  },
  '/analysis': {
    title: 'Analysis — Craftmindship',
    description: 'Product teardowns, system breakdowns, and operational thinking.',
    image: '/images/logos/craftmindship-light.png',
  },
  '/lab': {
    title: 'Lab — Craftmindship',
    description:
      'Interactive artifacts, workflow diagrams, and design system explorations.',
    image: '/images/logos/craftmindship-light.png',
  },
  '/about': {
    title: 'About — Luke Dang',
    description:
      'AI Product Builder · Technical Product Manager. Discovery → system design → AI-assisted development → QA → deploy.',
    image: '/images/logos/craftmindship-light.png',
  },
};

function buildHTML(
  meta: { title: string; description: string; image: string },
  pathname: string,
) {
  const img = `${BASE_URL}${meta.image}`;
  const url = `${BASE_URL}${pathname}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${img}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Craftmindship" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${img}" />
</head>
<body></body>
</html>`;
}

export default function middleware(request: Request) {
  const ua = request.headers.get('user-agent') || '';
  if (!CRAWLER_RE.test(ua)) {
    return next();
  }

  const { pathname } = new URL(request.url);

  // Skip static assets
  if (pathname.includes('.')) {
    return next();
  }

  const meta = ogData[pathname] || ogData['/'];
  return new Response(buildHTML(meta, pathname), {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export const config = {
  matcher: '/((?!_next|api).*)',
};
