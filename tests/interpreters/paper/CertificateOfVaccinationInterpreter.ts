import { CertificateOfVaccinationInterpreter } from '../../../src/interpreters/paper/CertificateOfVaccinationInterpreter';
import testData from './CertificateOfVaccinationInterpreterTestData';
import { CertificateOfVaccination } from '../../../src/papers/CertificateOfVaccination';

type InputOutput = {
    id?: string;
    name?: string;
    vaccines?: string[];
}

describe('CertificateOfVaccinationInterpreter', () => {
    let interpreter: CertificateOfVaccinationInterpreter;
    beforeEach(function () {
        interpreter = new CertificateOfVaccinationInterpreter();
    });
    it('', function () {
        testData.forEach((testRun) => {
            const input: InputOutput = testRun.input;
            const expected: InputOutput = testRun.expected;
            let inputs = [];
            if (input.id) {
                inputs.push('ID#: ' + input.id);
            }
            if (input.name) {
                inputs.push('NAME: ' + input.name);
            }
            if (input.vaccines) {
                inputs.push('VACCINES: ' + input.vaccines.join(', '));
            }

            const inputsJoined = inputs.join('\n');
            
            let certificateOfVaccination: CertificateOfVaccination;
            let caughtError = '';
            try {
                certificateOfVaccination = interpreter.interpret(inputsJoined);
            } catch (e) {
                caughtError = e;
            }

            if (inputs.length == 0) {
                expect(caughtError).toBe('Invalid input: ');
                return;
            }

            if (expected.id) {
                expect(certificateOfVaccination.getId()).toBe(expected.id);
            } else {
                expect(certificateOfVaccination.getId()).toBeUndefined();
            }
            if (expected.name) {
                expect(certificateOfVaccination.getName()).toBe(expected.name);
            } else {
                expect(certificateOfVaccination.getName()).toBeUndefined();
            }
            if (expected.vaccines) {
                expected.vaccines.forEach((vaccine: string) => {
                    expect(certificateOfVaccination.hasVaccine(vaccine)).toBeTruthy();
                });
            } else {
                expect(certificateOfVaccination.getVaccines()).toBeUndefined();
            }
        });
    });
});