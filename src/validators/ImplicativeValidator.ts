import { Validator, Papers } from '../types';

export class ImplicativeValidator implements Validator {
    constructor (private premise: Validator, private conclusion: Validator) {}
    
    public validate (papers: Papers): boolean {
        return !this.premise.validate(papers) || this.conclusion.validate(papers);
    }
}
