import { Validator, Papers } from '../../types';

export class HasCertificateOfVaccinationValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getCertificateOfVaccination();
    }
}