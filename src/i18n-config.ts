export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ja', 'zn', 'tw', 'ko'],
} as const

export type Locale = (typeof i18n)['locales'][number]