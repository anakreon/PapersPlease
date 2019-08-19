import { Validator, Papers } from '../types';

export class IsDiplomaticAuthorizationExpiredValidator implements Validator {
    public validate (papers: Papers): boolean {
        const diplomaticAuthorization = papers.getDiplomaticAuthorization();
        return diplomaticAuthorization && diplomaticAuthorization.getExpirationDate() < new Date('November 22, 1982');
    }
}