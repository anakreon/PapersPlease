import { Expression } from './Expression';
import { HeightSetter } from '../../../types';

export class HeightExpression extends Expression<HeightSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'HEIGHT';
    }
    protected setValue (value: string, setter: HeightSetter): void {
        setter.setHeight(value);
    }
}
