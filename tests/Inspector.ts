import { Inspector } from '../src/Inspector';
import { InputPapers } from '../src/types';
import testDataOne from './InspectorTestDataOne';
import testDataTwo from './InspectorTestDataTwo';

describe('Inspector #inspector', () => {
    it('one - 2-way', () => {
        const bulletin = `Entrants require passport\nAllow citizens of Arstotzka, Obristan\nCitizens of Obristan require access permit`;

        const inspector = new Inspector();
        inspector.receiveBulletin(bulletin);

        testDataOne.forEach((data) => {
            const entrant: InputPapers = {
                passport: `ID#: ${data.passport.id}
                NATION: ${data.passport.nation}
                NAME: ${data.passport.name}
                DOB: 1933.11.28
                SEX: M
                ISS: East Grestin
                EXP: ${data.passport.exp}`
            };
            if (data.accessPermit) {
                entrant.access_permit = `ID#: ${data.accessPermit.id}
                NAME: ${data.accessPermit.name}
                NATION: ${data.accessPermit.nation}`
            }
            expect(inspector.inspect(entrant)).toBe(data.expectedResult);
        });
    });
    it('two - mixed', function () {
        const bulletin = `Entrants require passport\nAllow citizens of Arstotzka`;

        const inspector = new Inspector();
        inspector.receiveBulletin(bulletin);

        testDataTwo.forEach((data) => {
            const entrant: InputPapers = {
                passport:`ID#: ${data.passport.id}
                NATION: Arstotzka
                NAME: ${data.passport.name}
                DOB: 1933.11.28
                SEX: ${data.passport.sex}
                ISS: East Grestin
                EXP: ${data.passport.exp}`
            };
            expect(inspector.inspect(entrant)).toBe(data.expectedResult);
        });
    });
});
