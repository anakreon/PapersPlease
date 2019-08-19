import { Papers, WeightGetter } from '../../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class WeightConsistencyValidator extends ConsistencyValidator<WeightGetter> {
    protected getRelatedPapers (papers: Papers): WeightGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getGrantOfAsylum(),
            papers.getIdCard()
        ];
    }

    protected getFieldValue (paper: WeightGetter): string {
        return paper.getWeight();
    }
}