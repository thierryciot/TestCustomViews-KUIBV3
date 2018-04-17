///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { State } from '@progress/kendo-data-query';

import { ModelDataResult } from '../../../core/data/model-data-result';
import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';
import { RestDataServiceFactory } from '../../../core/data/rest-data-service-factory';
import { IoTDevice } from '../../../data/io-t/device.model';
import { DeviceConfig } from '../../../data/io-t/device.config';

@Component({
    templateUrl: './drop-down-to-text-field.component.html',
    styleUrls: ['./drop-down-to-text-field.component.css']
})
export class DropDownToTextFieldBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $restDataServiceFactory: RestDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };

    public $dataServicesModel: { [key: string]: any } = {
        'ViewDataSource1': {
            'createModel': () => new IoTDevice()
        }
    };
    public $dataServicesState: { [key: string]: State } = {
        'ViewDataSource1': {
    skip: 0,
    take: 50
}
    };

    constructor(public injector: Injector) {
        this.$restDataServiceFactory = this.injector.get(RestDataServiceFactory);
        this.$dataServices = {
            'ViewDataSource1': this.$restDataServiceFactory.getService<IoTDevice>(DeviceConfig, this.$dataServicesState['ViewDataSource1'])
        };
        this.$dataServicesData = {
            'ViewDataSource1': this.getDataChanges('ViewDataSource1')
        };
        this.$dataServicesResult = {
            'ViewDataSource1': this.getDataResult('ViewDataSource1')
        };
    }

    public $config: any = {
        components: {
            label0 : {
    forAttribute: 'combobox0',
    text: 'Device Id'
}
,
            combobox0 : {
    textField: 'id',
    valueField: 'id',
    valuePrimitive: false,
    filter: 'None',
    title: 'Device Id',
        },
            label1 : {
    forAttribute: 'textbox0',
    text: 'Current Temperature'
}
,
            textbox0 : {
    placeholder: '',
    name: 'textbox0',
    value: '',
    title: '',
    debounce: 0
}

        }
    };

    public $dataModels: any = {
        ViewDataSource1Model: new IoTDevice()
    };

    public ngOnInit(): void {
        this['onInit']();

        for (const dataSourceName of Object.keys(this.$dataServices)) {
            this.read(dataSourceName);
        }
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

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
}
