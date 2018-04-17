///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ApplicationModule } from './modules/application/application.module';
import { AppRoutingModule } from './app-routing.module';

export const config = {
    declarations: [
        AppComponent,
        AuthCallbackComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        CoreModule,
        SharedModule,
        ApplicationModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
}