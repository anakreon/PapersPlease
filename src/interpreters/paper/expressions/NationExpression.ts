import { Expression } from './Expression';
import { NationSetter } from '../../../types';

export class NationExpression extends Expression<NationSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'NATION';
    }
    protected setValue (value: string, setter: NationSetter): void {
        setter.setNation(value);
    }
}