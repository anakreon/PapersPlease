import { NameExpression } from '../../../../src/interpreters/paper/expressions/NameExpression';
import { NameSetter } from '../../../../src/types';

describe('NameExpression', function () {
    let expression: NameExpression;
    let setter: NameSetter;
    beforeEach(function () {
        expression = new NameExpression();
        setter = {
            setName: jasmine.createSpy('setName')
        };
    });
    it('valid - space format', function () {
        const input = 'NAME: firstname lastname';
        expression.interpret(input, setter);
        const expectedName = 'firstname lastname'
        expect(setter.setName).toHaveBeenCalledWith(expectedName);
    });
    it('valid - comma format', function () {
        const input = 'NAME: lastname, firstname';
        expression.interpret(input, setter);
        const expectedName = 'firstname lastname'
        expect(setter.setName).toHaveBeenCalledWith(expectedName);
    });
    it('invalid - not name parameter', function () {
        const input = 'NOTNAME: lastname, firstname';
        expression.interpret(input, setter);
        expect(setter.setName).not.toHaveBeenCalled();
    });
    it('invalid format - missing colon', function () {
        const input = 'NAME lastname, firstname';
        expect(function () {
            expression.interpret(input, setter);
        }).toThrow('Invalid input: NAME lastname, firstname');
    });
});