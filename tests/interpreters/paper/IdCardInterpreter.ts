import { IdCardInterpreter } from '../../../src/interpreters/paper/IdCardInterpreter';
import testData from './IdCardInterpreterTestData';
import { IdCard } from '../../../src/papers/IdCard';

type InputOutput = {
    name?: string;
    height?: string;
    weight?: string;
};

describe('IdCardInterpreter', () => {
    let interpreter: IdCardInterpreter;
    beforeEach(function () {
        interpreter = new IdCardInterpreter();
    });
    it('', function () {
        testData.forEach((testRun) => {
            const input: InputOutput = testRun.input;
            const expected: InputOutput = testRun.expected;
            let inputs = [];
            if (input.name) {
                inputs.push('NAME: ' + input.name);
            }
            if (input.height) {
                inputs.push('HEIGHT: ' + input.height);
            }
            if (input.weight) {
                inputs.push('WEIGHT: ' + input.weight);
            }

            const inputsJoined = inputs.join('\n');
            
            let idCard: IdCard;
            let caughtError = '';
            try {
                idCard = interpreter.interpret(inputsJoined);
            } catch (e) {
                caughtError = e;
            }

            if (inputs.length == 0) {
                expect(caughtError).toBe('Invalid input: ');
                return;
            }

            if (expected.name) {
                expect(idCard.getName()).toBe(expected.name);
            } else {
                expect(idCard.getName()).toBeUndefined();
            }
            if (expected.height) {
                expect(idCard.getHeight()).toBe(expected.height);
            } else {
                expect(idCard.getHeight()).toBeUndefined();
            }
            if (expected.weight) {
                expect(idCard.getWeight()).toBe(expected.weight);
            } else {
                expect(idCard.getWeight()).toBeUndefined();
            }
        });
    });
});