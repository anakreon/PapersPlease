import { Validator, Papers } from '../../types';

export abstract class ConsistencyValidator<T> implements Validator {
    public validate (papers: Papers): boolean {
        return this.getRelatedPapers(papers)
            .filter(this.hasPaper)
            .map(this.getFieldValue)
            .every(this.isEveryValueSame);
    }

    protected abstract getRelatedPapers (papers: Papers): T[];
    protected abstract getFieldValue (paper: T): string;

    private hasPaper (paper: T): boolean {
        return !!paper;
    }
    private isEveryValueSame(currentValue: string, index: number, array: string[]): boolean {
        return index === 0 || currentValue === array[index - 1];
    }
}
