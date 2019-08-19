import { Passport } from './papers/Passport';
import { AccessPermit } from './papers/AccessPermit';
import { GrantOfAsylum } from './papers/GrantOfAsylum';
import { DiplomaticAuthorization } from './papers/DiplomaticAuthorization';
import { PersonalData } from './papers/PersonalData';
import { IdCard } from './papers/IdCard';
import { CertificateOfVaccination } from './papers/CertificateOfVaccination';

export class Papers {
    private passport: Passport;
    private accessPermit: AccessPermit;
    private grantOfAsylum: GrantOfAsylum;
    private diplomaticAuthorization: DiplomaticAuthorization;
    private certificateOfVaccination: CertificateOfVaccination;
    private idCard: IdCard;
    private personalData: PersonalData;
    
    constructor () {
        this.personalData = new PersonalData();
    }

    public setPassport (passport: Passport): void {
        this.passport = passport;
        this.personalData.fromPassport(passport);
    }
    public setAccessPermit (accessPermit: AccessPermit): void {
        this.accessPermit = accessPermit;
        this.personalData.fromAccessPermit(accessPermit);
    }
    public setGrantOfAsylum (grantOfAsylum: GrantOfAsylum): void {
        this.grantOfAsylum = grantOfAsylum;
        this.personalData.fromGrantOfAsylum(grantOfAsylum);
    }
    public setDiplomaticAuthorization (diplomaticAuthorization: DiplomaticAuthorization): void {
        this.diplomaticAuthorization = diplomaticAuthorization;
        this.personalData.fromDiplomaticAuthorization(diplomaticAuthorization);
    }
    public setCertificateOfVaccination (certificateOfVaccination: CertificateOfVaccination): void {
        this.certificateOfVaccination = certificateOfVaccination;
        this.personalData.fromCertificateOfVaccination(certificateOfVaccination);
    }
    public setIdCard (idCard: IdCard): void {
        this.idCard = idCard;
        this.personalData.fromIdCard(idCard);
    }

    public getPassport (): Passport {
        return this.passport;
    }
    public getAccessPermit (): AccessPermit {
        return this.accessPermit;
    }
    public getGrantOfAsylum (): GrantOfAsylum {
        return this.grantOfAsylum;
    }
    public getDiplomaticAuthorization (): DiplomaticAuthorization {
        return this.diplomaticAuthorization;
    }
    public getCertificateOfVaccination (): CertificateOfVaccination {
        return this.certificateOfVaccination;
    }
    public getIdCard (): IdCard {
        return this.idCard;
    }
    public getPersonalData (): PersonalData {
        return this.personalData;
    }
}