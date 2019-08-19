import { Validator, Papers } from '../types';

export class HasVaccinationValidator implements Validator {
    constructor (private vaccineName: string) {}

    public validate (papers: Papers): boolean {
        const certificateOfVaccination = papers.getCertificateOfVaccination();
        return certificateOfVaccination && certificateOfVaccination.hasVaccine(this.vaccineName);
    }
}