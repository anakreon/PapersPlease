import { Validator, Papers } from '../types';

export class HasVaccinationValidator implements Validator {
    constructor (private illnessName: string) {}

    public validate (papers: Papers): boolean {
        return false;
    }
}