// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es', 'ca'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch (error) {
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/en.json`)).default,
    };
  }
});
