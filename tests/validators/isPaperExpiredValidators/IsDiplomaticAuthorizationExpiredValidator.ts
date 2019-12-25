import { IsDiplomaticAuthorizationExpiredValidator } from '../../../src/validators/isPaperExpiredValidators/IsDiplomaticAuthorizationExpiredValidator';
import { Papers } from '../../../src/Papers';
import { DiplomaticAuthorization } from '../../../src/papers/DiplomaticAuthorization';

describe('IsDiplomaticAuthorizationExpiredValidator', () => {
    it('no diplomatic authorization, not expired', function () {
        const papers = new Papers();
        const validator = new IsDiplomaticAuthorizationExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has diplomatic authorization, is expired', function () {
        const papers = new Papers();
        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setExpirationDate(new Date('November 20, 1982'));
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new IsDiplomaticAuthorizationExpiredValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has diplomatic authorization, not expired', function () {
        const papers = new Papers();
        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setExpirationDate(new Date('November 25, 1982'));
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new IsDiplomaticAuthorizationExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});