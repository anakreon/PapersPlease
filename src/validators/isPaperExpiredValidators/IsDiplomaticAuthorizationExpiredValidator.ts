import { Papers, ExpiryGetter } from '../../types';
import { IsPaperExpiredValidator } from './IsPaperExpiredValidator';

export class IsDiplomaticAuthorizationExpiredValidator extends IsPaperExpiredValidator {
    protected getPaper (papers: Papers): ExpiryGetter {
        return papers.getDiplomaticAuthorization();
    }
}