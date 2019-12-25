import { HasVaccinationValidator } from '../../../src/validators/hasPaperValidators/HasVaccinationValidator';
import { Papers } from '../../../src/Papers';
import { CertificateOfVaccination } from '../../../src/papers/CertificateOfVaccination';

describe('HasVaccinationValidator', () => {
    let vaccine = '';
    beforeEach(function () {
        vaccine = 'influenza';
    });
    it('has certificate of vaccination, right vaccine', function () {
        const papers = new Papers();
        const certificateOfVaccination = new CertificateOfVaccination();
        certificateOfVaccination.setVaccines([vaccine, 'measles']);
        papers.setCertificateOfVaccination(certificateOfVaccination);

        const validator = new HasVaccinationValidator(vaccine);
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has certificate of vaccination, different vaccine', function () {
        const papers = new Papers();
        const certificateOfVaccination = new CertificateOfVaccination();
        certificateOfVaccination.setVaccines(['mumps', 'measles']);
        papers.setCertificateOfVaccination(certificateOfVaccination);

        const validator = new HasVaccinationValidator(vaccine);
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('no certificate of vaccination', function () {
        const papers = new Papers();

        const validator = new HasVaccinationValidator(vaccine);
        expect(validator.validate(papers)).toBeFalsy();
    });
});
