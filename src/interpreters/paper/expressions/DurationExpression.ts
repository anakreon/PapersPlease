import { Expression } from './Expression';
import { DurationSetter } from '../../../types';

export class DurationExpression extends Expression<DurationSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'DURATION';
    }
    protected setValue (value: string, setter: DurationSetter): void {
        setter.setDuration(value);
    }
}
