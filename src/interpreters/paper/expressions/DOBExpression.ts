import { Expression } from './Expression';
import { DateOfBirthSetter } from '../../../types';

export class DOBExpression extends Expression<DateOfBirthSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'DOB';
    }
    protected setValue (setter: DateOfBirthSetter, value: string): void {
        const isoDate = value.replace(/\./g, '-');
        const date = new Date(isoDate);
        setter.setDateOfBirth(date);
    }
}
