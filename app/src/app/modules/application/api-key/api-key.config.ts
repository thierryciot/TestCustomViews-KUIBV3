///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from './../../../shared/shared.module';
import { ApiKeyBaseComponent } from './api-key.base.component';
import { ApiKeyComponent } from './api-key.component';
import { BottomSectionComponent } from './bottomSection';
import { MiddleSectionComponent } from './middleSection';
import { TopSectionComponent } from './topSection';

export const config = {
    declarations: [
        ApiKeyBaseComponent,
        ApiKeyComponent,
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
