///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, Inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

const LANG_KEY = 'LANG';
const CULTURE_KEY = 'CULTURE';

@Injectable()
export class TranslationsService {
    constructor(private storageService: LocalStorageService) {
    }

    public getLanguage(): string {
        return this.storageService.getItem(LANG_KEY);
    }

    public setLanguage(value: string): void {
        this.storageService.setItem(LANG_KEY, value);
    }

    public getCulture(): string {
        return this.storageService.getItem(CULTURE_KEY);
    }

    public setCulture(value: string): void {
        this.storageService.setItem(CULTURE_KEY, value);
    }
}
