///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { tap } from 'rxjs/operators/tap';

import { AuthenticationProviderInterface } from '../authentication-provider.interface';
import { SessionStorageService } from '../../session-storage.service';

class ApiKeySession {
    apiKey: string;
}

export class ApiKeyProvider implements AuthenticationProviderInterface {
    private router: Router;
    private http: HttpClient;
    private sessionStorageService: SessionStorageService;
    private readonly sessionKey: string;
    private session: ApiKeySession = null;

    constructor(private settings: any, private injector: Injector) {
        this.router = injector.get(Router);
        this.http = injector.get(HttpClient);
        this.sessionStorageService = injector.get(SessionStorageService);
        this.sessionKey = 'api.key.' + settings.sessionKey;
    }

    public isAuthenticated(): Observable<boolean> {
        this.ensureSession();
        return of(this.session !== null);
    }

    public authenticate(): void {
        this.router.navigate(['application', 'api-key']);
    }

    public completeAuthentication(): Observable<any> {
        return of(this.session);
    }

    public authenticateRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
        this.ensureSession();

        if (this.session) {
            switch (this.settings.transport) {
                case 'header':
                    return of(request.clone({
                        headers: request.headers.set(this.settings.name, this.session.apiKey)
                    }));

                case 'query-string':
                    return of(request.clone({
                        params: request.params.set(this.settings.name, this.session.apiKey)
                    }));

                default:
                    break;
            }
        }

        return of(request);
    }

    public signIn(credentials: any): Observable<any> {
        const { apiKey } = credentials;
        let getRequest: Observable<any>;

        switch (this.settings.transport) {
            case 'header':
                const headers = {};
                headers[this.settings.name] = apiKey;

                getRequest = this.http.get(this.settings.serviceUri, {
                    responseType: 'text',
                    headers
                });
                break;

            case 'query-string':
                const params = {};
                params[this.settings.name] = apiKey;

                getRequest = this.http.get(this.settings.serviceUri, {
                    responseType: 'text',
                    params
                });
                break;

            default:
                return _throw(new Error(`Invalid API Key transport: ${this.settings.transport}`));
        }

        return getRequest.pipe(
            tap(() => {
                this.session = { apiKey };
                this.sessionStorageService.setItem(this.sessionKey, this.session);
            })
        );
    }

    public signOut(): Observable<void> {
        this.sessionStorageService.removeItem(this.sessionKey);
        this.session = null;
        return of();
    }

    public supportsRefresh(): boolean {
        return false;
    }

    public silentRefresh(): Observable<any> {
        return of();
    }

    private ensureSession() {
        if (this.session === null) {
            this.session = this.sessionStorageService.getItem(this.sessionKey);
        }
    }
}
