import { Validator, Papers } from '../types';

export abstract class InconsistencyValidator<T, S> implements Validator {
    public validate (papers: Papers): boolean {
        return this.getRelatedPapers(papers)
            .filter(this.hasNoPaper)
            .map(this.getFieldValue)
            .every(this.isEveryValueSame);
    }

    protected abstract getRelatedPapers (papers: Papers): T[];
    protected abstract getFieldValue (paper: T): S;

    private hasNoPaper (paper: T): boolean {
        return !paper;
    }
    private isEveryValueSame(currentValue: S, index: number, array: S[]): boolean {
        return index === 0 || currentValue === array[index - 1];
    }
}
