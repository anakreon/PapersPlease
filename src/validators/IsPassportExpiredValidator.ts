import { Validator, Papers } from '../types';

export class IsPassportExpiredValidator implements Validator {
    public validate (papers: Papers): boolean {
        const passport = papers.getPassport();
        return passport && passport.getExpirationDate() < new Date('November 22, 1982');
    }
}