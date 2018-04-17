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
import { RestDataServiceFactory } from '../../../core/data/rest-data-service-factory';
import { IoTDevice } from '../../../data/io-t/device.model';
import { DeviceConfig } from '../../../data/io-t/device.config';

@Component({
    templateUrl: './simple-list-ds.component.html',
    styleUrls: ['./simple-list-ds.component.css']
})
export class SimpleListDSBaseComponent implements OnInit, AfterViewInit, OnDestroy {

    public $restDataServiceFactory: RestDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };

    public $dataServicesModel: { [key: string]: any } = {
        'Devices': {
            'createModel': () => new IoTDevice()
        }
    };
    public $dataServicesState: { [key: string]: State } = {
        'Devices': {
    skip: 0
}
    };

    public $config: any = {
    myList3: [
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

    // For accessing real data from REST service:
    // Option 1: do everything by hand using Angular Http client service => need to create the url , ect... and then use Angular component/view binding (like tutorial)
    // Option 2: to use our data service.

    // List of fields generated from metadata
    public myRestFields = [
        
            "id",
        
            "currentTemp",
        
            "Set Temperature",
        
            "Humidity",
        
            "CO2 Level",
        
            "VOC",
        
    ];

    constructor(public injector: Injector) {
        this.$restDataServiceFactory = this.injector.get(RestDataServiceFactory);
        this.$dataServices = {
            'Devices': this.$restDataServiceFactory.getService<IoTDevice>(DeviceConfig, this.$dataServicesState['Devices'])
        };
        this.$dataServicesData = {
            'Devices': this.getDataChanges('Devices')
        };
        this.$dataServicesResult = {
            'Devices': this.getDataResult('Devices')
        };
    }

    // we could include these but we just need one function that reads the data and not the 3 separate functions
    public read(dataSourceName): void {
        this.$dataServices[dataSourceName].read();
    }

    public getDataChanges(dataSourceName): Observable<any[]> {
        const dataService = this.$dataServices[dataSourceName];
        return dataService.dataChanges()
            .map(response => response ? response.data : []);
    }

    public getDataResult(dataSourceName): BehaviorSubject<ModelDataResult<any>> {
        return this.$dataServices[dataSourceName].dataChanges();
    }

    public myRestList: Array<any> = [];

    public ngOnInit(): void {
        
        debugger;
        const dataSourceName = 'Devices';
        const dataService = this.$dataServices[dataSourceName];

        const results: Observable<any> = dataService.dataChanges();
            results.map(response => {
                debugger;
                return response ? response.data : [];
            }).subscribe(data => this.myRestList = data);

        
/*        const results: Observable<any> = dataService.dataChanges()
            .do( result => {
                debugger;
                console.log(`*** Result ${result}`)
            })
            .map(response => response ? response.data : []);

        results.do( result => {
            debugger;
            console.log(`*** Result ${result}`)
        });
*/
        dataService.read();
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }
}
