import { IsWorkerValidator } from '../../src/validators/IsWorkerValidator';
import { Papers } from '../../src/Papers';
import { AccessPermit } from '../../src/papers/AccessPermit';

describe('IsWorkerValidator', () => {
    it('no access permit', function () {
        const papers = new Papers();
        const validator = new IsWorkerValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has access permit, not worker permit', function () {
        const papers = new Papers();
        const accessPermit = new AccessPermit();
        accessPermit.setPurpose('TRANSIT');
        papers.setAccessPermit(accessPermit);

        const validator = new IsWorkerValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has access permit, is worker permit', function () {
        const papers = new Papers();
        const accessPermit = new AccessPermit();
        accessPermit.setPurpose('WORK');
        papers.setAccessPermit(accessPermit);

        const validator = new IsWorkerValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});