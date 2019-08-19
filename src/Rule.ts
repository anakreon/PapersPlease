import { Papers, Validator } from './types';

export class Rule {
    constructor (private validator: Validator, private validationMessage: string) {}

    public test (papers: Papers): boolean {
        return this.validator.validate(papers);
    }

    public getMessage (): string {
        return this.validationMessage;
    }
}