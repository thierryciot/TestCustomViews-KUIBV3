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
    templateUrl: './hw-3.component.html',
    styleUrls: ['./hw-3.component.css']
})
export class HW3BaseComponent implements OnInit, AfterViewInit, OnDestroy {



    // Define the view title.
    public title: string = "Hello";

    // Define the greeting message.
    public greeting: string = "<i style=\"color: blue;\" class=\"fa fa-globe\"></i>&nbsp;Salutations";

    // Define the generated at field.
    public generatedAt: string = "4/16/2018";


    public $config: any = {
    "version": "V3"
};

    constructor(public injector: Injector) {
    }

    public ngOnInit(): void {
        // Uncomment the debugger statement to inspect, at runtime, the properties defined above.
        //debugger;
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }
}
