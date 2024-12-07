import { Loader } from "@googlemaps/js-api-loader"

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;
  const config = useRuntimeConfig();
  const loader = new Loader({
    apiKey: config.public.googleMapKey,
    version: 'weekly',
  });

  loader.load();
});
