// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/Todo-app/sw.js', { scope: '/Todo-app/' });
//   });
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '/Todo-app/' }).then(reg => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(error => {
    console.log('Registration failed with ' + error);
  });
}