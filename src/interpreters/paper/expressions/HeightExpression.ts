import { Expression } from './Expression';
import { HeightSetter } from '../../../types';

export class HeightExpression extends Expression<HeightSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'HEIGHT';
    }
    protected setValue (setter: HeightSetter, value: string): void {
        setter.setHeight(value);
    }
}
