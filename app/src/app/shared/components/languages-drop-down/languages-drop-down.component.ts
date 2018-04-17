///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { TranslationsService } from '../../../core/translations.service';

@Component({
    selector: 'kb-languages-drop-down',
    templateUrl: './languages-drop-down.component.html'
})
export class KbLanguagesDropDownComponent implements OnInit {
    @ViewChild(DropDownListComponent) public kendoComponent: DropDownListComponent;
    @Input() public id: string;
    @Input() public name: string;
    @Input() public title: string;
    @Input() public config: any;
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();
    @Output() public selectionChange: EventEmitter<any> = new EventEmitter();
    private languageKey: string;

    public constructor(private translationsService: TranslationsService) {
    }

    public ngOnInit(): void {
        this.languageKey = this.translationsService.getLanguage();
    }

    public changeHandler(event: any): void {
        this.translationsService.setLanguage(this.languageKey);

        const selectedLanguage = this.config.data.find(x => x.key === this.languageKey);
        this.translationsService.setCulture(selectedLanguage.culture);

        this.valueChange.emit(event);
    }

    public selectionHandler(event: any): void {
        this.selectionChange.emit(event);
    }
}
