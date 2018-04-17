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
    templateUrl: './simple-list.component.html',
    styleUrls: ['./simple-list.component.css']
})
export class SimpleListBaseComponent implements OnInit, AfterViewInit, OnDestroy {

    public $config: any = {
    "myList3": [
    {
        id: 1,
        name: 'test 1 (sample data from index.js augmentModel)'
    },
    {
        id: 2,
        name: 'test 2'
    }
]

};

    // Here we need to create the properties we will access from the template
    // We access metadata properties from the view object
    public title: string = "List";

    // Define some sample data
    public myList = [ { 'id': 1, 'name': 'test 1 (sample data from base.component.ts.ejs)' }
                    , { 'id': 2, 'name': 'test 2' }
                    ];

    // This one is defined from the augmented metadata model from index.js
    public myList4 = [
    {
        id: 1,
        name: 'test 1 (sample data from index.js augmentModel)'
    },
    {
        id: 2,
        name: 'test 2'
    }
]
;

    constructor(public injector: Injector) {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }
}
