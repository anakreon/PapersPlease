import { Papers, HeightGetter } from '../../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class HeightConsistencyValidator extends ConsistencyValidator<HeightGetter> {
    protected getRelatedPapers (papers: Papers): HeightGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getGrantOfAsylum(),
            papers.getIdCard()
        ];
    }

    protected getFieldValue (paper: HeightGetter): string {
        return paper.getHeight();
    }
}