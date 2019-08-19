import { Papers, Validator } from '../types';

export class IsCitizenOfUnknownNationValidator implements Validator {
    public validate (papers: Papers): boolean {
        const personalData = papers.getPersonalData();
        return !personalData.getNation();
    }
}