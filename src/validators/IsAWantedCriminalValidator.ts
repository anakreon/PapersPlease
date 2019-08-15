import { Validator, Papers } from '../types';

export class IsAWantedCriminalValidator implements Validator {
    constructor (private criminalName: string) {}

    public validate (papers: Papers): boolean {
        const personalData = papers.getPersonalData();
        return personalData.getName() === this.criminalName;
    }
}
