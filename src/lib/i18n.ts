import contentDe from '../data/content-de.json';
import contentEn from '../data/content-en.json';

export type Locale = 'de' | 'en';

const contentMap = { de: contentDe, en: contentEn } as const;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'de';
}

export function getContent(locale: Locale) {
  return contentMap[locale];
}

// Maps page keys to their slugs per locale
const routeMap: Record<string, Record<Locale, string>> = {
  home:          { de: '/',              en: '/en/' },
  leistungen:    { de: '/leistungen',    en: '/en/services' },
  ueberUns:      { de: '/ueber-uns',     en: '/en/about-us' },
  kontakt:       { de: '/kontakt',       en: '/en/contact' },
  datenschutz:   { de: '/datenschutz',   en: '/en/privacy' },
  impressum:     { de: '/impressum',     en: '/en/imprint' },
};

export function getAlternatePath(currentPath: string): string {
  const clean = currentPath.replace(/\/$/, '') || '/';
  for (const routes of Object.values(routeMap)) {
    if (clean === routes.de || clean === routes.de + '/') {
      return routes.en;
    }
    if (clean === routes.en.replace(/\/$/, '') || clean === routes.en) {
      return routes.de;
    }
  }
  // Fallback: toggle /en/ prefix
  if (clean.startsWith('/en')) {
    return clean.replace(/^\/en\/?/, '/') || '/';
  }
  return '/en' + clean;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'de' ? 'en' : 'de';
}
