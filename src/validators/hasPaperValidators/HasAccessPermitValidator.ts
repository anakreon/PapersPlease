import { Validator, Papers } from '../../types';

export class HasAccessPermitValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getAccessPermit()
    }
}