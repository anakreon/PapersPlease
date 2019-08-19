import { Papers, DateOfBirthGetter } from '../../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class DOBConsistencyValidator extends ConsistencyValidator<DateOfBirthGetter> {
    protected getRelatedPapers (papers: Papers): DateOfBirthGetter[] {
        return [ 
            papers.getGrantOfAsylum(),
            papers.getPassport()
        ];
    }

    protected getFieldValue (paper: DateOfBirthGetter): string {
        return paper.getDateOfBirth().toDateString();
    }
}