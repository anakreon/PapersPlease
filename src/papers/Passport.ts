import { Paper } from './Paper';
import { Sex } from '../types';

export class Passport extends Paper {
    private dateOfBirth: Date;
    private sex: Sex;
    private issuer: string;

    public setDateOfBirth (dateOfBirth: Date): void {
        this.dateOfBirth = dateOfBirth;
    }
    public setSex (sex: Sex): void {
        this.sex = sex;
    }
    public setIssuer (issuer: string): void {
        this.issuer = issuer;
    }

    public getDateOfBirth (): Date {
        return this.dateOfBirth;
    }
    public getSex (): Sex {
        return this.sex;
    }
    public getIssuer (): string {
        return this.issuer;
    }
}