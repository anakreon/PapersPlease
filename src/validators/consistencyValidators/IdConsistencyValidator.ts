import { Papers, IdGetter } from '../../types';
import { ConsistencyValidator } from './ConsistencyValidator';

export class IdConsistencyValidator extends ConsistencyValidator<IdGetter> {
    protected getRelatedPapers (papers: Papers): IdGetter[] {
        return [ 
            papers.getAccessPermit(),
            papers.getDiplomaticAuthorization(),
            papers.getGrantOfAsylum(),
            papers.getPassport(),
            papers.getCertificateOfVaccination()
        ];
    }

    protected getFieldValue (paper: IdGetter): string {
        return paper.getId();
    }
}