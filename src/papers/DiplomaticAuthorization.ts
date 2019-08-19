import { Paper } from './Paper';
import { Nation } from '../types';

export class DiplomaticAuthorization extends Paper {
    private access: Nation;

    public setAccess (access: Nation): void {
        this.access = access;
    }

    public getAccess (): Nation {
        return this.access;
    }
}