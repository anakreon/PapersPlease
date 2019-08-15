import { Papers, NameGetter } from '../types';
import { InconsistencyValidator } from './InconsistencyValidator';

export class NameInconsistencyValidator extends InconsistencyValidator<NameGetter, string> {
    protected getRelatedPapers (papers: Papers): NameGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getDiplomaticAuthorization(),
            papers.getGrantOfAsylum(),
            papers.getPassport()
        ];
    }

    protected getFieldValue (paper: NameGetter): string {
        return paper.getName();
    }
}