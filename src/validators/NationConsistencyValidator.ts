import { Papers, NationGetter } from '../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class NationConsistencyValidator extends ConsistencyValidator<NationGetter, string> {
    protected getRelatedPapers (papers: Papers): NationGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getDiplomaticAuthorization(),
            papers.getGrantOfAsylum(),
            papers.getPassport(),
            papers.getIdCard()
        ];
    }

    protected getFieldValue (paper: NationGetter): string {
        return paper.getNation();
    }
}