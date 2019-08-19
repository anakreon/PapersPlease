import { Validator, Papers, ExpiryGetter } from '../../types';

export abstract class IsPaperExpiredValidator implements Validator {
    public validate (papers: Papers): boolean {
        const paper = this.getPaper(papers);
        return paper && paper.getExpirationDate() < new Date('November 22, 1982');
    }
    protected abstract getPaper (papers: Papers): ExpiryGetter;
}