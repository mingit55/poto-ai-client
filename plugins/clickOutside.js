import vClickOutside from 'click-outside-vue3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', vClickOutside.directive);
});
