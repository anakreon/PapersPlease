import { Validator, Papers } from '../types';

export class IsGrantOfAsylumExpiredValidator implements Validator {
    public validate (papers: Papers): boolean {
        const grantOfAsylum = papers.getGrantOfAsylum();
        return grantOfAsylum && grantOfAsylum.getExpirationDate() < new Date('November 22, 1982');
    }
}