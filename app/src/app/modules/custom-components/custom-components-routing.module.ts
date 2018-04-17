///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponentsComponent } from './custom-components.component';
import { HW1Component } from './hw-1/hw-1.component';
import { DropDownToCustomCompComponent } from './drop-down-to-custom-comp/drop-down-to-custom-comp.component';
import { DropdownToMultipleMetricsComponent } from './dropdown-to-multiple-metrics/dropdown-to-multiple-metrics.component';
import { HWFromAngularCompComponent } from './hw-from-angular-comp/hw-from-angular-comp.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CustomComponentsComponent,
        canActivate: [AuthenticationGuardService],
        children: [{
            path: '',
            redirectTo: 'hw-1',
            pathMatch: 'full'
        }, {
            path: 'hw-1',
            component: HW1Component
        }, {
            path: 'drop-down-to-custom-comp',
            component: DropDownToCustomCompComponent
        }, {
            path: 'dropdown-to-multiple-metrics',
            component: DropdownToMultipleMetricsComponent
        }, {
            path: 'hw-from-angular-comp',
            component: HWFromAngularCompComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class CustomComponentsRoutingModule { }

