import { Expression } from './Expression';
import { NationSetter } from '../../../types';

export class NationExpression extends Expression<NationSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'NATION';
    }
    protected setValue (setter: NationSetter, value: string): void {
        setter.setNation(value);
    }
}