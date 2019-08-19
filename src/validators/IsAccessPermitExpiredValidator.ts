import { Validator, Papers } from '../types';

export class IsAccessPermitExpiredValidator implements Validator {
    public validate (papers: Papers): boolean {
        const accessPermit = papers.getAccessPermit();
        return accessPermit && accessPermit.getExpirationDate() < new Date('November 22, 1982');
    }
}