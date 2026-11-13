import type { Lang } from './types';

// One URL per language, so each can be indexed and linked to on its own:
// Azerbaijani (the default) lives at the root, English under /en.
//   /            /about            /projects
//   /en          /en/about         /en/projects
export const SITE_URL = 'https://narix.az';
export const DEFAULT_LANG: Lang = 'az';
export const LANGS: Lang[] = ['az', 'en'];

/** '/about' → '/about' (az) or '/en/about' (en). Anchors and external links pass through. */
export function localePath(lang: Lang, path: string): string {
  if (!path.startsWith('/')) return path;
  if (lang === DEFAULT_LANG) return path;
  return path === '/' ? '/en' : `/en${path}`;
}

/** Splits a browser pathname into its language and the language-neutral path. */
export function parsePath(pathname: string): { lang: Lang; path: string } {
  // a static host may serve /about as /about/ or /about.html
  let clean = pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  let lang: Lang = DEFAULT_LANG;
  if (clean === '/en' || clean.startsWith('/en/')) {
    lang = 'en';
    clean = clean.slice(3) || '/';
  }
  return { lang, path: clean };
}

/** The same page in another language. */
export function switchLocalePath(pathname: string, to: Lang): string {
  return localePath(to, parsePath(pathname).path);
}

export function absoluteUrl(lang: Lang, path: string): string {
  const local = localePath(lang, path);
  return local === '/' ? `${SITE_URL}/` : `${SITE_URL}${local}`;
}
