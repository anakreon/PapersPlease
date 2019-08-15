import { Paper } from './Paper';
import { Nation } from '../types';

export class DiplomaticAuthorization extends Paper {
    private nations: Nation[];

    public setNations (nations: Nation[]): void {
        this.nations = nations;
    }

    public getNations (): Nation[] {
        return this.nations;
    }
}