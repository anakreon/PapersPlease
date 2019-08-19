import { Vaccine } from '../types';

export class CertificateOfVaccination {
    private id: string;
    private name: string;
    private vaccines: Vaccine[];

    public setId (id: string): void {
        this.id = id;
    }
    public setName (name: string): void {
        this.name = name;
    }
    public setVaccines (vaccines: Vaccine[]): void {
        this.vaccines = vaccines;
    }

    public getId (): string {
        return this.id;
    }
    public getName (): string {
        return this.name;
    }
    public getVaccines (): Vaccine[] {
        return this.vaccines;
    }
    public hasVaccine (vaccine: Vaccine): boolean {
        return this.vaccines.includes(vaccine);
    }
}