///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';
import { ApiKeyComponent } from './api-key/api-key.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: 'custom-views',
        loadChildren: './../custom-views/custom-views.module#CustomViewsModule'
    },
    {
        path: 'custom-components',
        loadChildren: './../custom-components/custom-components.module#CustomComponentsModule'
    },
    {
        path: 'rest-with-grid',
        loadChildren: './../rest-with-grid/rest-with-grid.module#RestWithGridModule'
    },
    {
        path: 'component-dependency',
        loadChildren: './../component-dependency/component-dependency.module#ComponentDependencyModule'
    },
    {
        path: 'application',
        children: [
            {
                path: 'login',
                component: LoginComponent
            }, 
            {
                path: 'forbidden',
                component: UnauthorizedPageComponent
            }, 
            {
                path: 'api-key',
                component: ApiKeyComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ApplicationRoutingModule { }

