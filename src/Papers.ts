import { Passport } from './papers/Passport';
import { AccessPermit } from './papers/AccessPermit';
import { GrantOfAsylum } from './papers/GrantOfAsylum';
import { DiplomaticAuthorization } from './papers/DiplomaticAuthorization';
import { PersonalData } from './papers/PersonalData';

export class Papers {
    private passport: Passport;
    private accessPermit: AccessPermit;
    private grantOfAsylum: GrantOfAsylum;
    private diplomaticAuthorization: DiplomaticAuthorization;
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
    public getPersonalData (): PersonalData {
        return this.personalData;
    }
}