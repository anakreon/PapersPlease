import { HasCertificateOfVaccinationValidator } from '../../../src/validators/hasPaperValidators/HasCertificateOfVaccinationValidator';
import { Papers } from '../../../src/Papers';
import { CertificateOfVaccination } from '../../../src/papers/CertificateOfVaccination';

describe('HasCertificateOfVaccinationValidator', () => {
    it('has certificate of vaccination', function () {
        const papers = new Papers();
        const certificateOfVaccination = new CertificateOfVaccination();
        papers.setCertificateOfVaccination(certificateOfVaccination);

        const validator = new HasCertificateOfVaccinationValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no certificate of vaccination', function () {
        const papers = new Papers();

        const validator = new HasCertificateOfVaccinationValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
