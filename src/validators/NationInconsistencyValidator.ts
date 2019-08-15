import { Papers, NationGetter } from '../types';
import { InconsistencyValidator } from './InconsistencyValidator';

export class NationInconsistencyValidator extends InconsistencyValidator<NationGetter, string> {
    protected getRelatedPapers (papers: Papers): NationGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getDiplomaticAuthorization(),
            papers.getGrantOfAsylum(),
            papers.getPassport()
        ];
    }

    protected getFieldValue (paper: NationGetter): string {
        return paper.getNation();
    }
}