///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDependencyComponent } from './component-dependency.component';
import { DropDownToTextFieldComponent } from './drop-down-to-text-field/drop-down-to-text-field.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ComponentDependencyComponent,
        canActivate: [AuthenticationGuardService],
        children: [{
            path: '',
            redirectTo: 'drop-down-to-text-field',
            pathMatch: 'full'
        }, {
            path: 'drop-down-to-text-field',
            component: DropDownToTextFieldComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ComponentDependencyRoutingModule { }

