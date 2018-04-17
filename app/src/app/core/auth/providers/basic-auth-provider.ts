///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';

import { AuthenticationProviderInterface } from '../authentication-provider.interface';
import { SessionStorageService } from '../../session-storage.service';

class User {
    userName: string;
    header: string;
}

export class BasicAuthProvider implements AuthenticationProviderInterface {
    private router: Router;
    private http: HttpClient;
    private sessionStorageService: SessionStorageService;
    private readonly sessionKey: string;
    private user: User = null;

    constructor(private settings: any, private injector: Injector) {
        this.router = injector.get(Router);
        this.http = injector.get(HttpClient);
        this.sessionStorageService = injector.get(SessionStorageService);
        this.sessionKey = 'basic.auth.' + settings.sessionKey;
    }

    public isAuthenticated(): Observable<boolean> {
        this.ensureUser();
        return of(this.user !== null);
    }

    public authenticate(): void {
        this.router.navigate(['application', 'login']);
    }

    public completeAuthentication(): Observable<any> {
        return of(this.user);
    }

    public authenticateRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
        this.ensureUser();

        if (this.user) {
            return of(request.clone({
                headers: request.headers.set('Authorization', `Basic ${this.user.header}`)
            }));
        }

        return of(request);
    }

    public signIn(credentials: any): Observable<any> {
        const {userName, password} = credentials;

        const header = btoa(userName + ':' + password);

        return this.http.get(this.settings.serviceUri, {
            responseType: 'text',
            headers: { 'Authorization': `Basic ${header}` }
        }).pipe(
            tap(() => {
                this.user = { userName, header };
                this.sessionStorageService.setItem(this.sessionKey, this.user);
            })
        );
    }

    public signOut(): Observable<void> {
        this.sessionStorageService.removeItem(this.sessionKey);
        this.user = null;
        return of();
    }

    public supportsRefresh(): boolean {
        return false;
    }

    public silentRefresh(): Observable<any> {
        return of();
    }

    private ensureUser() {
        if (this.user === null) {
            this.user = this.sessionStorageService.getItem(this.sessionKey);
        }
    }
}
