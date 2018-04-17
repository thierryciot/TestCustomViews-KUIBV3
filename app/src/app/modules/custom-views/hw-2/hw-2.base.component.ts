///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { State } from '@progress/kendo-data-query';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { KbGridComponent } from '../../../shared/components/grid/grid.component';
import { ModelDataResult } from '../../../core/data/model-data-result';

import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';

@Component({
    templateUrl: './hw-2.component.html',
    styleUrls: ['./hw-2.component.css']
})
export class HW2BaseComponent implements OnInit, AfterViewInit, OnDestroy {

    // Here we need to create the properties we will access from the template
    // We access metadata properties from the view object
    public title: string = "Hello";
    public greeting: string = "Salutations";

    public $config: any = {
};

    constructor(public injector: Injector) {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }



    public onClick(e): void {
        alert(`HW2: in default implementation for onClick - You should override this function in the public component class.`);
    }

}
