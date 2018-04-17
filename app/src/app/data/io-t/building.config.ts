///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { RestServiceConfig } from '../../core/data/rest-service-config';

export const BuildingConfig: RestServiceConfig = {
    dataProviderName: 'IoT',
    serverOperations: false,
    idField: 'id',
    dataProperty: '',
    totalProperty: '',
    actions: {
        create: {
            method: 'POST',
            url: 'buildings/'
        },
        remove: {
            method: 'DELETE',
            url: 'buildings/:id'
        },
        read: {
            method: 'GET',
            url: 'buildings/'
        },
        update: {
            method: 'PUT',
            url: 'buildings/:id'
        },
    }
};
