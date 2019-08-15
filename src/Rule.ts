import { Papers, Validator } from './types';

export class Rule {
    constructor (private validator: Validator, private validationErrorMessage: string) {}

    public test (papers: Papers): boolean {
        return this.validator.validate(papers);
    }

    public getErrorMessage (): string {
        return this.validationErrorMessage;
    }
}