import { NationConsistencyValidator } from '../../../src/validators/consistencyValidators/NationConsistencyValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';
import { AccessPermit } from '../../../src/papers/AccessPermit';
import { DiplomaticAuthorization } from '../../../src/papers/DiplomaticAuthorization';
import { Passport } from '../../../src/papers/Passport';
import { IdCard } from '../../../src/papers/IdCard';

describe('NationConsistencyValidator', () => {
    it('all nations consistent', function () {
        const nation = 'Arstotzka';
        
        const accessPermit = new AccessPermit();
        accessPermit.setNation(nation);

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setNation(nation)
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setNation(nation);

        const passport = new Passport();
        passport.setNation(nation);

        const idCard = new IdCard();

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NationConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has all ids, all different', function () {                        
        const accessPermit = new AccessPermit();
        accessPermit.setNation('Antegria');

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setNation('Impor')
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setNation('Kolechia');

        const passport = new Passport();
        passport.setNation('Obristan');

        const idCard = new IdCard();

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NationConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('some papers missing, other same', function () {
        const nation = 'Arstotzka';
        
        const accessPermit = new AccessPermit();
        accessPermit.setNation(nation);

        const passport = new Passport();
        passport.setNation(nation);

        const idCard = new IdCard();

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NationConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('some papers missing, other different', function () {
        const accessPermit = new AccessPermit();
        accessPermit.setNation('Antegria');

        const passport = new Passport();
        passport.setNation('Obristan');

        const idCard = new IdCard();

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NationConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('all papers missing', function () {
        const papers = new Papers();

        const validator = new NationConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
