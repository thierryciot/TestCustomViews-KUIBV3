///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ModelDataResult } from '../../../core/data/model-data-result';
import { AuthorizationService } from '../../../core/auth/authorization.service';
import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';

import { State } from '@progress/kendo-data-query';


@Component({
    selector: 'app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css']
})
export class  AppLayoutBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public authorizationService: AuthorizationService;
        public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };

    public $dataServicesModel: { [key: string]: any } = {
    };
    public $dataServicesState: { [key: string]: State } = {
    };

    constructor(public injector: Injector) {
        this.authorizationService = this.injector.get(AuthorizationService);
                this.$dataServices = {
        };
        this.$dataServicesData = {
        };
        this.$dataServicesResult = {
        };
        this.filterNavigationData();
    }

    public $config: any = {
        components: {
            languagesDdl: {
    data: this.getLanguages(),
    textField: 'label',
    valueField: 'key',
}
,
            usernavigation0: {}
,
            contentplaceholder0: {}

        }
    };

    public $dataModels: any = {
    };

    public $navigationData = [
    {
        title: 'CustomViews',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart'
        },
        children: [
            {
                title: 'HW1',
                label: 'HW1',
                routerLink: '/custom-views/hw-1',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'HW2',
                label: 'HW2',
                routerLink: '/custom-views/hw-2',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'HW3',
                label: 'HW3',
                routerLink: '/custom-views/hw-3',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'SimpleList',
                label: 'Simple List',
                routerLink: '/custom-views/simple-list',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'SimpleListDS',
                label: 'Simple List DS',
                routerLink: '/custom-views/simple-list-ds',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'fdds',
                label: undefined,
                routerLink: '/custom-views/fdds',
                authorization: {
                    allowedRoles: [

                    ]
                }
            }
        ]
    },
    {
        title: 'CustomComponents',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart'
        },
        children: [
            {
                title: 'HW1',
                label: 'HW1',
                routerLink: '/custom-components/hw-1',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'DropDownToCustomComp',
                label: 'DropDown To Custom Component',
                routerLink: '/custom-components/drop-down-to-custom-comp',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'DropdownToMultipleMetrics',
                label: 'Dropdown to Multiple Metrics',
                routerLink: '/custom-components/dropdown-to-multiple-metrics',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'HWFromAngularComp',
                label: 'HWFromAngularComp',
                routerLink: '/custom-components/hw-from-angular-comp',
                authorization: {
                    allowedRoles: [

                    ]
                }
            }
        ]
    },
    {
        title: 'RestWithGrid',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart'
        },
        children: [
            {
                title: 'Buildings',
                label: 'Buildings',
                routerLink: '/rest-with-grid/buildings',
                authorization: {
                    allowedRoles: [

                    ]
                }
            },
            {
                title: 'Devices',
                label: 'Devices',
                routerLink: '/rest-with-grid/devices',
                authorization: {
                    allowedRoles: [

                    ]
                }
            }
        ]
    },
    {
        title: 'ComponentDependency',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart'
        },
        children: [
            {
                title: 'DropDownToTextField',
                label: 'DropDownToTextField',
                routerLink: '/component-dependency/drop-down-to-text-field',
                authorization: {
                    allowedRoles: [

                    ]
                }
            }
        ]
    }
]
;

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

    public getLanguages(): any[] {
        return [
    {
        label: 'English',
        culture: 'en-US',
        order: 0,
        key: 'translations.default'
    }
]
;
    }

    private filterNavigationData(): void {
        this.$navigationData.forEach(module => {
            const views = module.children.filter(
                view => this.authorizationService.isAuthorized(view.authorization));
            module.children = views;
        });

        this.$navigationData = this.$navigationData.filter(module => module.children.length);
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
