///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { AuthenticationGuardService } from '../../../core/auth/authentication-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        canActivate: [AuthenticationGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LandingPageRoutingModule { }
