import { Validator, Papers } from '../../types';

export class HasIdCardValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getIdCard();
    }
}