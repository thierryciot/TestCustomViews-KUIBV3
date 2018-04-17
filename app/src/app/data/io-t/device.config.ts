///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { RestServiceConfig } from '../../core/data/rest-service-config';

export const DeviceConfig: RestServiceConfig = {
    dataProviderName: 'IoT',
    serverOperations: false,
    idField: 'id',
    dataProperty: '',
    totalProperty: '',
    actions: {
        create: {
            method: 'POST',
            url: 'devices/'
        },
        remove: {
            method: 'DELETE',
            url: 'devices/:id'
        },
        read: {
            method: 'GET',
            url: 'devices/'
        },
        update: {
            method: 'PUT',
            url: 'devices/:id'
        },
    }
};
