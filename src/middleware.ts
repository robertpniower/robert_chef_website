// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  // Match all pathnames except for static files & api routes
  matcher: ['/', '/(ca|es|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
