import { Papers, IdGetter } from '../types';
import { InconsistencyValidator } from './InconsistencyValidator';

export class IdInconsistencyValidator extends InconsistencyValidator<IdGetter, string> {
    protected getRelatedPapers (papers: Papers): IdGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getDiplomaticAuthorization(),
            papers.getGrantOfAsylum(),
            papers.getPassport()
        ];
    }

    protected getFieldValue (paper: IdGetter): string {
        return paper.getId();
    }
}