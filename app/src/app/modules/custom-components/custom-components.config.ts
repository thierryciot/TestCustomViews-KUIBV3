///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CustomComponentsComponent } from './custom-components.component';
import { CustomComponentsRoutingModule } from './custom-components-routing.module';
import { AppLayoutModule } from './../application/app-layout/app-layout.module';
import { HW1Module } from './hw-1/hw-1.module';
import { DropDownToCustomCompModule } from './drop-down-to-custom-comp/drop-down-to-custom-comp.module';
import { DropdownToMultipleMetricsModule } from './dropdown-to-multiple-metrics/dropdown-to-multiple-metrics.module';
import { HWFromAngularCompModule } from './hw-from-angular-comp/hw-from-angular-comp.module';

export const config = {
    declarations: [
        CustomComponentsComponent
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        AppLayoutModule,
        HW1Module,
        DropDownToCustomCompModule,
        DropdownToMultipleMetricsModule,
        HWFromAngularCompModule,
        CustomComponentsRoutingModule
    ],
    exports: [],
    providers: []
};
