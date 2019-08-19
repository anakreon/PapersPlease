import { Papers, ExpiryGetter } from '../../types';
import { IsPaperExpiredValidator } from './IsPaperExpiredValidator';

export class IsPassportExpiredValidator extends IsPaperExpiredValidator {
    protected getPaper (papers: Papers): ExpiryGetter {
        return papers.getPassport();
    }
}