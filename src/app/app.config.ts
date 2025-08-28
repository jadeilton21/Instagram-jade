import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, } from '@angular/platform-browser';
import { withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1JEaF1cWWhAYVFxWmFZfVtgfF9HaVZTQGYuP1ZhSXxWdk1hUX9WcX1XTmdcU0d9XEI=');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
     provideHttpClient(withFetch())
    ]
};
