///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomViewsComponent } from './custom-views.component';
import { HW1Component } from './hw-1/hw-1.component';
import { HW2Component } from './hw-2/hw-2.component';
import { HW3Component } from './hw-3/hw-3.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { SimpleListDSComponent } from './simple-list-ds/simple-list-ds.component';
import { FddsComponent } from './fdds/fdds.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CustomViewsComponent,
        canActivate: [AuthenticationGuardService],
        children: [{
            path: '',
            redirectTo: 'hw-1',
            pathMatch: 'full'
        }, {
            path: 'hw-1',
            component: HW1Component
        }, {
            path: 'hw-2',
            component: HW2Component
        }, {
            path: 'hw-3',
            component: HW3Component
        }, {
            path: 'simple-list',
            component: SimpleListComponent
        }, {
            path: 'simple-list-ds',
            component: SimpleListDSComponent
        }, {
            path: 'fdds',
            component: FddsComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class CustomViewsRoutingModule { }

