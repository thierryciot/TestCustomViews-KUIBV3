///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from './../../../shared/shared.module';
import { DevicesBaseComponent } from './devices.base.component';
import { DevicesComponent } from './devices.component';
import { BottomSectionComponent } from './bottomSection';
import { MiddleSectionComponent } from './middleSection';
import { TopSectionComponent } from './topSection';

export const config = {
    declarations: [
        DevicesBaseComponent,
        DevicesComponent,
        BottomSectionComponent,
        MiddleSectionComponent,
        TopSectionComponent
    ],
    entryComponents: [],
    exports: [
        BottomSectionComponent,
        MiddleSectionComponent,
        TopSectionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule
    ],
    providers: []
};
