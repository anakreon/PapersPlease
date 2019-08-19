import { Expression } from './Expression';
import { DateOfBirthSetter } from '../../../types';

export class DOBExpression extends Expression<DateOfBirthSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'DOB';
    }
    protected setValue (value: string, setter: DateOfBirthSetter): void {
        const isoDate = value.replace(/\./g, '-');
        const date = new Date(isoDate);
        setter.setDateOfBirth(date);
    }
}
