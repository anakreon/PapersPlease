import { Validator, Papers } from '../types';
import { Arstotzka } from '../constants';

export class IsValidDiplomaticAuthorizationValidator implements Validator {
    public validate (papers: Papers): boolean {
        const diplomaticAuthorization = papers.getDiplomaticAuthorization();
        return diplomaticAuthorization && diplomaticAuthorization.canAccess(Arstotzka);
    }
}