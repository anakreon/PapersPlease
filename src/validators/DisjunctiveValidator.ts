import { Validator, Papers } from '../types';

export class DisjunctiveValidator implements Validator {
    constructor (private validatorA: Validator, private validatorB: Validator) {}
    
    public validate (papers: Papers): boolean {
        return this.validatorA.validate(papers) || this.validatorB.validate(papers);
    }
}
