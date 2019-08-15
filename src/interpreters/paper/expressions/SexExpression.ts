import { Expression } from './Expression';
import { SexSetter } from '../../../types';

export class SexExpression extends Expression<SexSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'SEX';
    }
    protected setValue (setter: SexSetter, value: string): void {
        setter.setSex(value);
    }
}
