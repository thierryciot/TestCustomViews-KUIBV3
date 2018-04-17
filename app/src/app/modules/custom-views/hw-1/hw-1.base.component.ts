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
    templateUrl: './hw-1.component.html',
    styleUrls: ['./hw-1.component.css']
})
export class HW1BaseComponent implements OnInit, AfterViewInit, OnDestroy {


    // Define the view title.
    public titleY: string = "Hello \"Thierry\"";

    // Define the greeting message.
    public greeting: string = "<i class=\"fa fa-thumbs-up\"></i>&nbsp;<b>Hello</b>";


    public $config: any = {
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
