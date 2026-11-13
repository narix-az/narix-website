'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { dictionaries, type Dictionary } from './translations';
import { DEFAULT_LANG, localePath } from './routes';
import type { Lang } from './types';

interface LanguageContextValue {
  lang: Lang;
  t: Dictionary;
  /** Turns a site path into the right URL for the current language. */
  href: (path: string) => string;
  /**
   * True on pages that exist once for all languages (the 404 page): the
   * language switcher then links to each language's home page instead of to
   * a translated copy of an address that does not exist.
   */
  standalone: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// The language comes from the URL (see routes.ts), not from browser storage:
// every page is rendered on the server in its own language, so there is no
// flash of the wrong one and search engines see both.
export function LanguageProvider({
  lang,
  standalone = false,
  children,
}: {
  lang: Lang;
  standalone?: boolean;
  children: ReactNode;
}) {
  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: dictionaries[lang], href: (path) => localePath(lang, path), standalone }),
    [lang, standalone]
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback when consumed outside the provider (e.g. tests).
    return {
      lang: DEFAULT_LANG,
      t: dictionaries[DEFAULT_LANG],
      href: (path) => localePath(DEFAULT_LANG, path),
      standalone: false,
    };
  }
  return ctx;
}

export function useT(): Dictionary {
  return useLanguage().t;
}
