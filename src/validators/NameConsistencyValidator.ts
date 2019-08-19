import { Papers, NameGetter } from '../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class NameConsistencyValidator extends ConsistencyValidator<NameGetter, string> {
    protected getRelatedPapers (papers: Papers): NameGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getDiplomaticAuthorization(),
            papers.getGrantOfAsylum(),
            papers.getPassport(),
            papers.getIdCard()
        ];
    }

    protected getFieldValue (paper: NameGetter): string {
        return paper.getName();
    }
}