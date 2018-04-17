///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { HttpClientModule } from '@angular/common/http';

import { DataProviderService } from './data/data-provider.service';
import { ODataServiceFactory } from './data/odata-service-factory';
import { ProgressServiceFactory } from './data/progress-service-factory';
import { ProgressSessionService } from './data/progress-session.service';
import { RestDataServiceFactory } from './data/rest-data-service-factory';

import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';
import { TranslationsService } from './translations.service';
import { RoleService } from './auth/role.service';
import { AuthenticationService } from './auth/authentication.service';
import { AuthenticationGuardService } from './auth/authentication-guard.service';
import { AuthorizationService } from './auth/authorization.service';
import { AuthorizationGuardService } from './auth/authorization-guard.service';
import { httpInterceptorProviders } from './http-interceptors.config';
import { environment } from '../../environments/environment';

const authenticationConfig = environment.authentication;

export const config = {
    imports: [
        HttpClientModule
    ],
    providers: [
        { provide: 'Window',  useValue: window },
        DataProviderService,
        ODataServiceFactory,
        ProgressServiceFactory,
        ProgressSessionService,
        RestDataServiceFactory,
        LocalStorageService,
        SessionStorageService,
        TranslationsService,
        RoleService,
        {
            provide: 'AuthenticationConfig',
            useValue: authenticationConfig
        },
        AuthenticationService,
        AuthenticationGuardService,
        AuthorizationService,
        AuthorizationGuardService,
        httpInterceptorProviders
    ]
};
