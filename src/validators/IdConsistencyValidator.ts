import { Papers, IdGetter } from '../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class IdConsistencyValidator extends ConsistencyValidator<IdGetter, string> {
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