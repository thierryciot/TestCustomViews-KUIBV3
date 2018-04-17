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

@Component({
    templateUrl: './hw-1.component.html',
    styleUrls: ['./hw-1.component.css']
})
export class HW1BaseComponent implements OnInit, AfterViewInit, OnDestroy {
        public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };

    public $dataServicesModel: { [key: string]: any } = {
    };
    public $dataServicesState: { [key: string]: State } = {
    };

    constructor(public injector: Injector) {
                this.$dataServices = {
        };
        this.$dataServicesData = {
        };
        this.$dataServicesResult = {
        };
    }

    public $config: any = {
        components: {
            customhelloworldcomp0 : {
    "greeting": "eh"
},
            customhelloworldcomp1 : {
    "greeting": "Salutations"
}
        }
    };

    public $dataModels: any = {
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
