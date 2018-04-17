///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
const KEY_PREFIX = '$kuib.';

interface StorageInterface {
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
}

export class BaseStorageService {
    protected storage: StorageInterface;

    public setItem(key: string, value: any): void {
        this.storage.setItem(KEY_PREFIX + key, JSON.stringify(value));
    }

    public getItem(key: string): any {
        return JSON.parse(this.storage.getItem(KEY_PREFIX + key));
    }

    public removeItem(key): void {
        this.storage.removeItem(KEY_PREFIX + key);
    }
}
