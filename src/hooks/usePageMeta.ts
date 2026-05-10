import { useEffect } from "react";

const DEFAULT_TITLE = "Craftmindship \u2014 AI Product Builder";
const DEFAULT_DESC = "I analyze systems, find what\u2019s broken, and build what\u2019s missing. Production SaaS across construction tech, travel tech, fintech, and edtech.";

export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} \u2014 Craftmindship` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description || DEFAULT_DESC);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title ? `${title} \u2014 Craftmindship` : DEFAULT_TITLE);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description || DEFAULT_DESC);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute("content", DEFAULT_DESC);
      if (ogTitle) ogTitle.setAttribute("content", DEFAULT_TITLE);
      if (ogDesc) ogDesc.setAttribute("content", DEFAULT_DESC);
    };
  }, [title, description]);
}
