import { Validator, Papers } from '../../types';

export class HasGrantOfAsylumValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getGrantOfAsylum()
    }
}