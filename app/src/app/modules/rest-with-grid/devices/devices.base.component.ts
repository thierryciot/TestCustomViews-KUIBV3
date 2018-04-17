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
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.css']
})
export class DevicesBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid') public grid: KbGridComponent;

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
    skip: 0,
    take: 20
}
    };

    public $config: any = {
    title: 'Devices',
    grid: {
        filterable: false,
        groupable: false,
        pageable: this.$dataServicesState['Devices'].take !== undefined,
        pageSize: 20,
        reorderable: false,
        resizable: false,
        sortable: false,
        commandColumnWidth: 220,
        editing: {
            mode: 'Popup'
        },
        createModel: () => this.$dataServicesModel['Devices'].createModel()
        ,
        events: {
                onRowSelect: (e) => {
            this['onRowSelect'](e);
        }
                }

    },
    components: {
    ctl2 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'id',
    upArrowText : '',
    spinners: false
}
 , 
    ctl3 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'currentTemp',
    upArrowText : '',
    spinners: false
}
 , 
    ctl4 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'Set Temperature',
    upArrowText : '',
    spinners: false
}
 , 
    ctl5 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'Humidity',
    upArrowText : '',
    spinners: false
}
 , 
    ctl6 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'CO2 Level',
    upArrowText : '',
    spinners: false
}
 , 
    ctl7 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'VOC',
    upArrowText : '',
    spinners: false
}

}

    };

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
