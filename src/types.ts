import { Passport } from './papers/Passport';
import { AccessPermit } from './papers/AccessPermit';
import { GrantOfAsylum } from './papers/GrantOfAsylum';
import { DiplomaticAuthorization } from './papers/DiplomaticAuthorization';
import { PersonalData } from './papers/PersonalData';
import { IdCard } from './papers/IdCard';
import { CertificateOfVaccination } from './papers/CertificateOfVaccination';
import { WorkPass } from './papers/WorkPass';
import { Inspector } from './Inspector';
import { PapersInterpreter } from './PapersInterpreter';
import { Bulletin } from './Bulletin';
import { BulletinInterpreter } from './interpreters/bulletin/BulletinInterpreter';

export type Nation = 'Arstotzka' | 'Antegria' | 'Impor' | 'Kolechia' | 'Obristan' | 'Republia' | 'United Federation'
export type Sex = 'M' | 'F';
export type Purpose = 'TRANSIT' | 'WORK';
export type Document = 'passport' | 'ID card' | 'access permit' | 'work pass' | 'grant of asylum' | 'diplomatic authorization';
export type Vaccine = 'tuberculosis' | 'hepatitis B' | 'cholera' | 'cowpox' | 'yellow fever' | string;

export type InspectionSuccess = 'Glory to Arstotzka.' | 'Cause no trouble.';
export type InspectionFailure = string;//'Entry denied: reason'; 'Detainment: reason'
export type InspectionResult = InspectionSuccess | InspectionFailure;

export interface InputPapers {
    passport?: string;
    ID_card?: string;
    access_permit?: string;
    work_pass?: string;
    grant_of_asylum?: string;
    certificate_of_vaccination?: string;
    diplomatic_authorization?: string;
}

export interface AccessSetter {
    setAccess (access: Nation[]): void;
}
export interface AccessGetter {
    getAccess (): Nation;
}
export interface DateOfBirthSetter {
    setDateOfBirth (dateOfBirth: Date): void;
}
export interface DateOfBirthGetter {
    getDateOfBirth (): Date;
}
export interface DurationSetter {
    setDuration (duration: string): void;
}
export interface DurationGetter {
    getDuration (): string;
}
export interface ExpirySetter {
    setExpirationDate (expirationDate: Date): void;
}
export interface ExpiryGetter {
    getExpirationDate (): Date;
}
export interface HeightSetter {
    setHeight (height: string): void;
}
export interface HeightGetter {
    getHeight (): string;
}
export interface IdSetter {
    setId (id: string): void;
}
export interface IdGetter {
    getId (): string;
}
export interface IssuerSetter {
    setIssuer (issuer: string): void;
}
export interface IssuerGetter {
    getIssuer (): string;
}
export interface NameSetter {
    setName (name: string): void;
}
export interface NameGetter {
    getName (): string;
}
export interface NationSetter {
    setNation (nation: string): void;
}
export interface NationGetter {
    getNation (): string;
}
export interface PurposeSetter {
    setPurpose (purpose: string): void;
}
export interface PurposeGetter {
    getPurpose (): string;
}
export interface SexSetter {
    setSex (sex: string): void;
}
export interface SexGetter {
    getSex (): string;
}
export interface VaccinesSetter {
    setVaccines (vaccines: Vaccine[]): void;
}
export interface VaccinesGetter {
    getVaccines (): Vaccine[];
}
export interface WeightSetter {
    setWeight (weight: string): void;
}
export interface WeightGetter {
    getWeight (): string;
}

export interface Papers {
    getPassport (): Passport;
    getAccessPermit (): AccessPermit;
    getGrantOfAsylum (): GrantOfAsylum;
    getDiplomaticAuthorization (): DiplomaticAuthorization;
    getCertificateOfVaccination (): CertificateOfVaccination;
    getIdCard (): IdCard;
    getWorkPass (): WorkPass;
    getPersonalData (): PersonalData;
}

export interface Validator {
    validate (papers: Papers): boolean;
}

export { Inspector, PapersInterpreter, Bulletin, BulletinInterpreter };