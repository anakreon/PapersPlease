import { Papers, WeightGetter } from '../types';
import { InconsistencyValidator } from './InconsistencyValidator';

export class WeightInconsistencyValidator extends InconsistencyValidator<WeightGetter, string> {
    protected getRelatedPapers (papers: Papers): WeightGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getGrantOfAsylum()
        ];
    }

    protected getFieldValue (paper: WeightGetter): string {
        return paper.getWeight();
    }
}