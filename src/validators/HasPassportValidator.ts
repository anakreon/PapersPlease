import { Validator, Papers } from '../types';

export class HasPassportValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getPassport()
    }
}