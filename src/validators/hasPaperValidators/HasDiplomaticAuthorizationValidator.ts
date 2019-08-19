import { Validator, Papers } from '../../types';

export class HasDiplomaticAuthorizationValidator implements Validator {
    public validate (papers: Papers): boolean {
        return !!papers.getDiplomaticAuthorization()
    }
}