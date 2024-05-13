import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ngsw-worker.js').then(reg => {
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;

      newWorker.onstatechange = () => {
        if (newWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' +
              'tabs for this page are closed. See https://cra.link/PWA.');

            // Execute callback
            if (promptUserToRefresh) {
              promptUserToRefresh(reg.waiting);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    });
  });

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}

function promptUserToRefresh(serviceWorker) {
  // This will be called when the updated service worker is installed and ready to take over.
  // You can prompt the user to refresh the page to use the updated content.
  // Here we just automatically refresh the page.
  serviceWorker.postMessage({ type: 'SKIP_WAITING' });
}
