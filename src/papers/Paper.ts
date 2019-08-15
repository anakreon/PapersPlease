import { Nation } from '../types';

export class Paper {
    private id: string;
    private name: string;
    private nation: Nation;
    private expirationDate: Date;

    public setId (id: string): void {
        this.id = id;
    }
    public setName (name: string): void {
        this.name = name;
    }
    public setNation (nation: Nation): void {
        this.nation = nation;
    }
    public setExpirationDate (expirationDate: Date): void {
        this.expirationDate = expirationDate;
    }

    public getId (): string {
        return this.id;
    }
    public getName (): string {
        return this.name;
    }
    public getNation (): Nation {
        return this.nation;
    }
    public getExpirationDate (): Date {
        return this.expirationDate;
    }
}