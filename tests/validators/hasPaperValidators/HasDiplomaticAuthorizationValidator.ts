import { HasDiplomaticAuthorizationValidator } from '../../../src/validators/hasPaperValidators/HasDiplomaticAuthorizationValidator';
import { Papers } from '../../../src/Papers';
import { DiplomaticAuthorization } from '../../../src/papers/DiplomaticAuthorization';

describe('HasDiplomaticAuthorizationValidator', () => {
    it('has certificate of vaccination', function () {
        const papers = new Papers();
        const diplomaticAuthorization = new DiplomaticAuthorization();
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new HasDiplomaticAuthorizationValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no certificate of vaccination', function () {
        const papers = new Papers();

        const validator = new HasDiplomaticAuthorizationValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
