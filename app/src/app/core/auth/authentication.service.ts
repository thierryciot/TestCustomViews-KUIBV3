///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, Injector, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';
import { _throw } from 'rxjs/observable/throw';
import { concatMap } from 'rxjs/operators/concatMap';
import { reduce } from 'rxjs/operators/reduce';
import { findIndex } from 'rxjs/operators/findIndex';

import { SessionStorageService } from '../session-storage.service';
import { AuthenticationProviderInterface } from './authentication-provider.interface';

const SIGNIN_STATE_KEY = 'auth.signin.state';

class SignInState {
    providerIndex: number;
    returnUrl: string;
    dataProviders: string[];
}

@Injectable()
export class AuthenticationService {
    protected authProviders: AuthenticationProviderInterface[] = [];
    protected authMap: {
        [key: string]: {
            provider: AuthenticationProviderInterface,
            index: number
        }
    } = {};
    protected requireSignIn = false;

    constructor (@Inject('AuthenticationConfig') protected config: any, private location: Location,
        private sessionStorageService: SessionStorageService, private injector: Injector) {

        if (!config) {
            return;
        }

        this.requireSignIn = !!config.appSignIn;

        Object.keys(config.authProviders).forEach(authType => {
            config.authProviders[authType].items.forEach(item => {
                const authProvider = this.createAuthProvider(authType, item.settings);
                this.authProviders.push(authProvider);

                item.dataProviders.forEach(dataProvider => {
                    this.authMap[dataProvider] = {
                        provider: authProvider,
                        index: this.authProviders.length - 1
                    };
                });
            });
        });
    }

    public isAuthenticated(): Observable<boolean> {
        return from(this.authProviders).pipe(
            concatMap(item => item.isAuthenticated()),
            reduce((acc, val) => acc && val, true),
        );
    }

    public authenticate(returnUrl: string): void {
        this.findUnauthenticatedProviderIndex().subscribe(index => this.authenticateProvider(returnUrl, index));
    }

    public authenticateDataProvider(dataProvider: string) {
        if (this.authMap[dataProvider]) {
            this.authenticateProvider(this.location.path(), this.authMap[dataProvider].index);
        }
    }

    public completeAuthentication(): Observable<any> {
        const signInState: SignInState = this.getSigninState() || {
            providerIndex: -1,
            returnUrl: '/',
            dataProviders: []
        };

        if (signInState.providerIndex === -1) {
            return of({ returnUrl: signInState.returnUrl });
        }

        return this.authProviders[signInState.providerIndex].completeAuthentication().pipe(
            map(item => {
                this.sessionStorageService.removeItem(SIGNIN_STATE_KEY);
                return { returnUrl: signInState.returnUrl };
            })
        );
    }

    public authenticateRequest(dataProvider: string, request: HttpRequest<any>): Observable<HttpRequest<any>> {
        if (this.authMap[dataProvider]) {
            return this.authMap[dataProvider].provider.authenticateRequest(request);
        }

        return of(request);
    }

    public signIn(credentials: any): Observable<void> {
        const signInState: SignInState = this.getSigninState();

        if (!signInState) {
            return _throw(new Error('Error Signing In. Unknown authentication provider.'));
        }

        return this.authProviders[signInState.providerIndex].signIn(credentials);
    }

    public signOut(): Observable<void> {
        return from(this.authProviders).pipe(
            concatMap(item => item.signOut())
        );
    }

    public supportsRefresh(dataProvider: string): boolean {
        return this.authMap[dataProvider] ? this.authMap[dataProvider].provider.supportsRefresh() : false;
    }

    public silentRefresh(dataProvider: string): Observable<any> {
        if (this.supportsRefresh(dataProvider)) {
            return this.authMap[dataProvider].provider.silentRefresh();
        }

        return _throw(new Error(`Silent refresh is not supported for ${dataProvider} data provider`));
    }

    public getSigninState(): SignInState {
        return this.sessionStorageService.getItem(SIGNIN_STATE_KEY);
    }

    protected createAuthProvider(type, settings): AuthenticationProviderInterface {
        return null;
    }

    private findUnauthenticatedProviderIndex(): Observable<number> {
        return from(this.authProviders).pipe(
            concatMap(item => item.isAuthenticated()),
            findIndex(val => !val)
        );
    }

    private authenticateProvider(returnUrl: string, providerIndex): void {
        if (providerIndex > -1) {
            const signInState = {
                providerIndex,
                returnUrl,
                dataProviders: Object.keys(this.authMap).filter(key => this.authMap[key].index === providerIndex)
            };

            this.sessionStorageService.setItem(SIGNIN_STATE_KEY, signInState);
            this.authProviders[providerIndex].authenticate();
        }
    }
}
