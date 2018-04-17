///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { AuthorizationService } from '../../../core/auth/authorization.service';

@Component({
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public authorizationService: AuthorizationService;

    public modules = [{
        description: '',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart',
        },
        label: 'Custom Views',
        name: 'CustomViews',
        url: 'custom-views',
        children: [{
            name: 'HW1',
            routerLink: '/custom-views/hw-1',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'HW2',
            routerLink: '/custom-views/hw-2',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'HW3',
            routerLink: '/custom-views/hw-3',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'SimpleList',
            routerLink: '/custom-views/simple-list',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'SimpleListDS',
            routerLink: '/custom-views/simple-list-ds',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'fdds',
            routerLink: '/custom-views/fdds',
            authorization: {
    allowedRoles: [

    ]
}

        }]
    }, {
        description: '',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart',
        },
        label: 'Custom Components',
        name: 'CustomComponents',
        url: 'custom-components',
        title: 'A module for testing custom components',
        children: [{
            name: 'HW1',
            routerLink: '/custom-components/hw-1',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'DropDownToCustomComp',
            routerLink: '/custom-components/drop-down-to-custom-comp',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'DropdownToMultipleMetrics',
            routerLink: '/custom-components/dropdown-to-multiple-metrics',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'HWFromAngularComp',
            routerLink: '/custom-components/hw-from-angular-comp',
            authorization: {
    allowedRoles: [

    ]
}

        }]
    }, {
        description: '',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart',
        },
        label: 'Grid View from Test REST',
        name: 'RestWithGrid',
        url: 'rest-with-grid',
        title: 'USe Kendo grid view to see content of the REST service',
        children: [{
            name: 'Buildings',
            routerLink: '/rest-with-grid/buildings',
            authorization: {
    allowedRoles: [

    ]
}

        }, {
            name: 'Devices',
            routerLink: '/rest-with-grid/devices',
            authorization: {
    allowedRoles: [

    ]
}

        }]
    }, {
        description: '',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-area-chart',
        },
        label: 'Component Dependency',
        name: 'ComponentDependency',
        url: 'component-dependency',
        title: 'Showing how a component can render data from selected item.',
        children: [{
            name: 'DropDownToTextField',
            routerLink: '/component-dependency/drop-down-to-text-field',
            authorization: {
    allowedRoles: [

    ]
}

        }]
    }];

    constructor(public injector: Injector) {
        this.authorizationService = this.injector.get(AuthorizationService);

        this.filterModules();
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    private filterModules(): void {
        this.modules.forEach(module => {
            module.children = module.children.filter(
                view => this.authorizationService.isAuthorized(view.authorization));
        });

        this.modules = this.modules.filter(m => m.children.length);
    }
}
