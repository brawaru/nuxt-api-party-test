// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-api-party'],
  apiParty: {
    allowClient: true,
    endpoints: {
      modrinth: {
        url: 'https://staging-api.modrinth.com/v2/',
        schema:
          'https://raw.githubusercontent.com/modrinth/docs/master/static/openapi.yaml',
      },
    },
  },
});
