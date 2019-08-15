import { Papers, DateOfBirthGetter } from '../types';
import { InconsistencyValidator } from './InconsistencyValidator';

export class DOBInconsistencyValidator extends InconsistencyValidator<DateOfBirthGetter, Date> {
    protected getRelatedPapers (papers: Papers): DateOfBirthGetter[] {
        return [ 
            papers.getGrantOfAsylum(),
            papers.getPassport()
        ];
    }

    protected getFieldValue (paper: DateOfBirthGetter): Date {
        return paper.getDateOfBirth();
    }
}