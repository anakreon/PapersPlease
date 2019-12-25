import { IsValidDiplomaticAuthorizationValidator } from '../../src/validators/IsValidDiplomaticAuthorizationValidator';
import { Papers } from '../../src/Papers';
import { DiplomaticAuthorization } from '../../src/papers/DiplomaticAuthorization';

describe('IsValidDiplomaticAuthorizationValidator', () => {
    it('no diplomatic authorization', function () {
        const papers = new Papers();
        const validator = new IsValidDiplomaticAuthorizationValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has diplomatic authorization, no access', function () {
        const papers = new Papers();
        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setAccess([]);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new IsValidDiplomaticAuthorizationValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has diplomatic authorization, cannot access country, no Arstotzka', function () {
        const papers = new Papers();
        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setAccess(['Antegria', 'Impor']);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new IsValidDiplomaticAuthorizationValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has diplomatic authorization, can access country', function () {
        const papers = new Papers();
        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setAccess(['Arstotzka', 'Kolechia']);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new IsValidDiplomaticAuthorizationValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});