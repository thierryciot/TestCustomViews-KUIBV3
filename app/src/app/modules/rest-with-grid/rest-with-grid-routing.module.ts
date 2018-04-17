///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestWithGridComponent } from './rest-with-grid.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { DevicesComponent } from './devices/devices.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: RestWithGridComponent,
        canActivate: [AuthenticationGuardService],
        children: [{
            path: '',
            redirectTo: 'buildings',
            pathMatch: 'full'
        }, {
            path: 'buildings',
            component: BuildingsComponent
        }, {
            path: 'devices',
            component: DevicesComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class RestWithGridRoutingModule { }

