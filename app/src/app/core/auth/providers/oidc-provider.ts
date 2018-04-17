///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { concatMap } from 'rxjs/operators/concatMap';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { take } from 'rxjs/operators/take';

import { UserManager, Log, MetadataService, User } from 'oidc-client';

import { AuthenticationProviderInterface } from '../authentication-provider.interface';

export class OidcProvider implements AuthenticationProviderInterface {
    private userStream = new BehaviorSubject<User>(null);
    protected userManager: UserManager;
    protected userState: Observable<User>;

    constructor(settings: any) {
        this.userManager = new UserManager(settings);

        this.userState = this.userStream.pipe(
            take(1),
            concatMap(item => item ? of(item) : fromPromise(this.userManager.getUser()))
        );
    }

    public isAuthenticated(): Observable<boolean> {
        return this.userState.pipe(
            map((user: User) => user && !user.expired)
        );
    }

    public authenticate(): void {
        this.userManager.signinRedirect({
            prompt: 'login'
        });
    }

    public completeAuthentication(): Observable<any> {
        return fromPromise(this.userManager.signinRedirectCallback()).pipe(
            tap((user: User) => {
                this.userStream.next(user);
            }));
    }

    public authenticateRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
        return this.userState.pipe(
            map((user: User) => {
                const token = user ? user.access_token : '';

                return request.clone({
                    headers: request.headers.set('Authorization', `Bearer ${token}`)
                });
            })
        );
    }

    public signIn(credentials: any): Observable<void> {
        return of();
    }

    public signOut(): Observable<void> {
        return fromPromise(this.userManager.removeUser()).pipe(
            tap((item: any) => {
                this.userStream.next(null);
            }));
    }

    public supportsRefresh(): boolean {
        return false; // TODO - make it true when popup callback is implemented
    }

    public silentRefresh(): Observable<any> {
        return this.userState.pipe(
            map((user: User) => ({
                prompt: 'none',
                login_hint: user.profile.email || user.profile.sub
            })),
            concatMap(options => fromPromise(this.userManager.signinPopup(options))),
            tap(user => {
                this.userStream.next(user);
            })
        );
    }
}
