import { Papers, Validator } from '../types';

export class IsCitizenOfNationValidator implements Validator {
    constructor (private nationName: string) {}

    public validate (papers: Papers): boolean {
        const personalData = papers.getPersonalData();
        const nation = personalData.getNation();
        return !nation || nation === this.nationName;
    }
}