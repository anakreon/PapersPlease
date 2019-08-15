import { Papers, HeightGetter } from '../types';
import { InconsistencyValidator } from './InconsistencyValidator';

export class HeightInconsistencyValidator extends InconsistencyValidator<HeightGetter, string> {
    protected getRelatedPapers (papers: Papers): HeightGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getGrantOfAsylum()
        ];
    }

    protected getFieldValue (paper: HeightGetter): string {
        return paper.getHeight();
    }
}