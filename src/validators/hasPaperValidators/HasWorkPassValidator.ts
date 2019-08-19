import { Validator, Papers } from '../../types';

export class HasWorkPassValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getWorkPass()
    }
}