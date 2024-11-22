// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config();

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {},
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      title: 'ZZIK-DA | 찍다',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimal-ui',
        },

        {
          name: 'description',
          content: '맞춤형 촬영 장소 및 시간 탐색 서비스',
        },

        // Schema.org (For Google+)
        { name: 'name', content: 'ZZIK-DA | 찍다' },
        {
          name: 'description',
          content: '맞춤형 촬영 장소 및 시간 탐색 서비스',
        },
        { name: 'image', content: '' },

        // Twitter Card markup
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '' },
        { name: 'twitter:url', content: 'http://zzik-da.com/' },
        { name: 'twitter:title', content: 'ZZIK-DA | 찍다' },
        {
          name: 'twitter:description',
          content: '맞춤형 촬영 장소 및 시간 탐색 서비스',
        },
        { name: 'twitter:site', content: '' },

        { property: 'og:url', content: 'http://zzik-da.com//' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ZZIK-DA | 찍다' },
        {
          property: 'og:description',
          content: '맞춤형 촬영 장소 및 시간 탐색 서비스',
        },
        { property: 'og:image', content: '' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'ZZIK-DA | 찍다' },
      ],
    },
  },
  css: [
    'reset-css',
    '~/assets/scss/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  devServer: {
    port: parseInt(process.env.PORT || '3065'), // change this
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
});
