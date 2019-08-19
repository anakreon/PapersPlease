import { Papers, ExpiryGetter } from '../../types';
import { IsPaperExpiredValidator } from './IsPaperExpiredValidator';

export class IsGrantOfAsylumExpiredValidator extends IsPaperExpiredValidator {
    protected getPaper (papers: Papers): ExpiryGetter {
        return papers.getGrantOfAsylum();
    }
}