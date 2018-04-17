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
import { IoTBuilding } from '../../../data/io-t/building.model';
import { BuildingConfig } from '../../../data/io-t/building.config';

@Component({
    templateUrl: './buildings.component.html',
    styleUrls: ['./buildings.component.css']
})
export class BuildingsBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid') public grid: KbGridComponent;

    public $restDataServiceFactory: RestDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };

    public $dataServicesModel: { [key: string]: any } = {
        'Buildings': {
            'createModel': () => new IoTBuilding()
        }
    };
    public $dataServicesState: { [key: string]: State } = {
        'Buildings': {
    skip: 0,
    take: 20
}
    };

    public $config: any = {
    title: 'Buildings',
    grid: {
        filterable: false,
        groupable: false,
        pageable: this.$dataServicesState['Buildings'].take !== undefined,
        pageSize: 20,
        reorderable: false,
        resizable: false,
        sortable: false,
        commandColumnWidth: 220,
        editing: {
            mode: 'Incell'
        },
        createModel: () => this.$dataServicesModel['Buildings'].createModel()
        ,
        events: {
                onRowSelect: (e) => {
            this['onRowSelect'](e);
        }
                }

    },
    components: {
    ctl0 : {
    placeholder: '',
    downArrowText: '',
            format: '',
                        step: 1,
        title: 'id',
    upArrowText : '',
    spinners: false
}
 , 
    ctl1 : {
    placeholder: '',
    name: 'name',
    value: '',
    title: 'name',
    debounce: 0
}

}

    };

    constructor(public injector: Injector) {
        this.$restDataServiceFactory = this.injector.get(RestDataServiceFactory);
        this.$dataServices = {
            'Buildings': this.$restDataServiceFactory.getService<IoTBuilding>(BuildingConfig, this.$dataServicesState['Buildings'])
        };
        this.$dataServicesData = {
            'Buildings': this.getDataChanges('Buildings')
        };
        this.$dataServicesResult = {
            'Buildings': this.getDataResult('Buildings')
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
