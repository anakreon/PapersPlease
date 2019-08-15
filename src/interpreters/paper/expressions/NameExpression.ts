import { Expression } from './Expression';
import { NameSetter } from '../../../types';

export class NameExpression extends Expression<NameSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'NAME';
    }
    protected setValue (setter: NameSetter, value: string): void {
        setter.setName(value);
    }
}
