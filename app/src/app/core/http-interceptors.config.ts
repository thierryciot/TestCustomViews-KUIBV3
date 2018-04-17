///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationInterceptor } from './auth/authentication-interceptor';
import { UnauthorizedInterceptor } from './auth/unauthorized-interceptor';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UnauthorizedInterceptor,
        multi: true
    },
];
