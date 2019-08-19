import { Nation, Sex } from '../types';
import { Passport } from './Passport';
import { Paper } from './Paper';
import { AccessPermit } from './AccessPermit';
import { GrantOfAsylum } from './GrantOfAsylum';
import { DiplomaticAuthorization } from './DiplomaticAuthorization';
import { CertificateOfVaccination } from './CertificateOfVaccination';
import { IdCard } from './IdCard';

export class PersonalData {
    private id: string;
    private name: string;
    private nation: Nation;
    private dateOfBirth: Date;
    private sex: Sex;
    private height: string;
    private weight: string;

    public fromPassport (passport: Passport): void {
        this.addCommonValues(passport);
        this.dateOfBirth = passport.getDateOfBirth();
        this.sex = passport.getSex();
    }
    public fromAccessPermit (accessPermit: AccessPermit): void {
        this.addCommonValues(accessPermit);
        this.height = accessPermit.getHeight();
        this.weight = accessPermit.getWeight();
    }
    public fromGrantOfAsylum (grantOfAsylum: GrantOfAsylum): void {
        this.addCommonValues(grantOfAsylum);
        this.dateOfBirth = grantOfAsylum.getDateOfBirth();
        this.height = grantOfAsylum.getHeight();
        this.weight = grantOfAsylum.getWeight();
    }
    public fromDiplomaticAuthorization (diplomaticAuthorization: DiplomaticAuthorization): void {
        this.addCommonValues(diplomaticAuthorization);
    }
    private addCommonValues (paper: Paper): void {
        this.id = paper.getId();
        this.name = paper.getName();
        this.nation = paper.getNation();
    }
    public fromCertificateOfVaccination (certificateOfVaccination: CertificateOfVaccination): void {
        this.id = certificateOfVaccination.getId();
        this.name = certificateOfVaccination.getName();
    }
    public fromIdCard (idCard: IdCard): void {
        this.name = idCard.getName();
        this.height = idCard.getHeight();
        this.weight = idCard.getWeight();
        this.nation = idCard.getNation();
    }

    public getId (): string {
        return this.id;
    }
    public getName (): string {
        return this.name;
    }
    public getNation (): string {
        return this.nation;
    }
    public getDateOfBirth (): Date {
        return this.dateOfBirth;
    }
    public getSex (): Sex {
        return this.sex;
    }
}