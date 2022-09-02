export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.hook('app:mounted', () => {
    window.addEventListener('stackbitObjectsChanged', (e: any) => {
      console.log('stackbitObjectsChanged', e);
    });
  });
});
