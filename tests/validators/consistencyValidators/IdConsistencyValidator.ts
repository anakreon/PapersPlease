import { IdConsistencyValidator } from '../../../src/validators/consistencyValidators/IdConsistencyValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';
import { AccessPermit } from '../../../src/papers/AccessPermit';
import { DiplomaticAuthorization } from '../../../src/papers/DiplomaticAuthorization';
import { Passport } from '../../../src/papers/Passport';
import { CertificateOfVaccination } from '../../../src/papers/CertificateOfVaccination';

describe('IdConsistencyValidator', () => {
    it('all ids consistent', function () {
        const id = 'someId';
        
        const accessPermit = new AccessPermit();
        accessPermit.setId(id);

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setId(id)
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setId(id);

        const passport = new Passport();
        passport.setId(id);

        const certificateOfVaccination = new CertificateOfVaccination();
        certificateOfVaccination.setId(id);

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);
        papers.setCertificateOfVaccination(certificateOfVaccination);

        const validator = new IdConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has all ids, all different', function () {        
        const accessPermit = new AccessPermit();
        accessPermit.setId('123');

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setId('234')
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setId('345');

        const passport = new Passport();
        passport.setId('456');

        const certificateOfVaccination = new CertificateOfVaccination();
        certificateOfVaccination.setId('567');

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);
        papers.setCertificateOfVaccination(certificateOfVaccination);

        const validator = new IdConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('some papers missing, other same', function () {
        const id = 'someId';
        
        const accessPermit = new AccessPermit();
        accessPermit.setId(id);

        const passport = new Passport();
        passport.setId(id);

        const certificateOfVaccination = new CertificateOfVaccination();
        certificateOfVaccination.setId(id);

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setPassport(passport);
        papers.setCertificateOfVaccination(certificateOfVaccination);

        const validator = new IdConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('some papers missing, other different', function () {
        const accessPermit = new AccessPermit();
        accessPermit.setId('123');

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setId('234')

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);

        const validator = new IdConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('all papers missing', function () {
        const papers = new Papers();

        const validator = new IdConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
