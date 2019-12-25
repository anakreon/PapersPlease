import { IsAccessPermitExpiredValidator } from '../../../src/validators/isPaperExpiredValidators/IsAccessPermitExpiredValidator';
import { Papers } from '../../../src/Papers';
import { AccessPermit } from '../../../src/papers/AccessPermit';

describe('IsAccessPermitExpiredValidator', () => {
    it('no access permit, not expired', function () {
        const papers = new Papers();
        const validator = new IsAccessPermitExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has access permit, is expired', function () {
        const papers = new Papers();
        const accessPermit = new AccessPermit();
        accessPermit.setExpirationDate(new Date('November 20, 1982'));
        papers.setAccessPermit(accessPermit);

        const validator = new IsAccessPermitExpiredValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has access permit, not expired', function () {
        const papers = new Papers();
        const accessPermit = new AccessPermit();
        accessPermit.setExpirationDate(new Date('November 25, 1982'));
        papers.setAccessPermit(accessPermit);

        const validator = new IsAccessPermitExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});