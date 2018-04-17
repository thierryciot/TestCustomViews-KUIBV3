///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { _throw } from 'rxjs/observable/throw'
import { concat } from 'rxjs/operators/concat';
import { catchError } from 'rxjs/operators/catchError';

import { AuthenticationService } from './authentication.service';
import { DATA_PROVIDER_HEADER } from '../constants';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err, retry) => {
                if (err instanceof HttpErrorResponse && err.status === 401) {
                    const dataProvider = request.headers.get(DATA_PROVIDER_HEADER);

                    if (!dataProvider) {
                        return _throw(err);
                    }

                    if (this.authenticationService.supportsRefresh(dataProvider)) {
                        return concat(this.authenticationService.silentRefresh(dataProvider), retry);
                    } else {
                        this.authenticationService.authenticateDataProvider(dataProvider);
                    }

                    return empty();
                }

                return _throw(err);
            })
        );
    }
}