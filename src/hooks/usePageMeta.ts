import { useEffect } from "react";

const BASE_URL = "https://craftmindship.com";
const DEFAULT_TITLE = "Craftmindship \u2014 Luke Dang";
const DEFAULT_DESC = "AI Product Builder and Technical Product Manager. Workflow-heavy SaaS with Supabase/RLS, real user pilots, and AI-assisted delivery.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logos/craftmindship-light.png`;

export function usePageMeta(
  title?: string,
  description?: string,
  options?: { ogImage?: string; canonical?: string },
) {
  useEffect(() => {
    const pageTitle = title ? `${title} \u2014 Craftmindship` : DEFAULT_TITLE;
    const pageDesc = description || DEFAULT_DESC;
    const ogImage = options?.ogImage
      ? `${BASE_URL}${options.ogImage}`
      : DEFAULT_OG_IMAGE;
    const canonical = options?.canonical
      ? `${BASE_URL}${options.canonical}`
      : undefined;

    document.title = pageTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pageDesc);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", pageTitle);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", pageDesc);

    const ogImageEl = document.querySelector('meta[property="og:image"]');
    if (ogImageEl) ogImageEl.setAttribute("content", ogImage);

    const twitterImageEl = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageEl) twitterImageEl.setAttribute("content", ogImage);

    // Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", canonical);
    } else if (canonicalEl) {
      canonicalEl.remove();
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute("content", DEFAULT_DESC);
      if (ogTitleEl) ogTitleEl.setAttribute("content", DEFAULT_TITLE);
      if (ogDescEl) ogDescEl.setAttribute("content", DEFAULT_DESC);
      if (ogImageEl) ogImageEl.setAttribute("content", DEFAULT_OG_IMAGE);
      if (twitterImageEl) twitterImageEl.setAttribute("content", DEFAULT_OG_IMAGE);
      const cl = document.querySelector('link[rel="canonical"]');
      if (cl) cl.remove();
    };
  }, [title, description, options?.ogImage, options?.canonical]);
}
