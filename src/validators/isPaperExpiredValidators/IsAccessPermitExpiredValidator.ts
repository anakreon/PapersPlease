import { Papers, ExpiryGetter } from '../../types';
import { IsPaperExpiredValidator } from './IsPaperExpiredValidator';

export class IsAccessPermitExpiredValidator extends IsPaperExpiredValidator {
    protected getPaper (papers: Papers): ExpiryGetter {
        return papers.getAccessPermit();
    }
}