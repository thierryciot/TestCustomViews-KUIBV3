///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/auth/authentication.service';

@Component({
    selector: 'api-key',
    templateUrl: './api-key.component.html',
    styleUrls: ['./api-key.component.css']
})
export class  ApiKeyBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $config: any = {
        title: 'API Key'
    };

    public $apiKeyForm: FormGroup;
    public $authError: string;
    public $dataProviders = '';

    protected $router: Router;
    protected $authenticationService: AuthenticationService;

    constructor(protected $injector: Injector) {
        this.$router = $injector.get(Router);
        this.$authenticationService = $injector.get(AuthenticationService);

        const signInState = this.$authenticationService.getSigninState();

        if (signInState) {
            this.$dataProviders = signInState.dataProviders.join(', ');
        }

        this.$apiKeyForm = new FormGroup({
            apiKey: new FormControl('', Validators.required)
        });
    }

    public authenticate() {
        const { apiKey } = this.$apiKeyForm.value;

        this.$authenticationService.signIn({ apiKey })
            .subscribe(() => {
                this.$router.navigate(['auth-callback']);
            },
            error => {
                this.$authError = 'Invalid API Key';
            });
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }
}
