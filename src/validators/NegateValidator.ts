import { Validator, Papers } from '../types';

export class NegateValidator implements Validator {
    constructor (private validator: Validator) {}
    
    public validate (papers: Papers): boolean {
        return !this.validator.validate(papers);
    }
}
