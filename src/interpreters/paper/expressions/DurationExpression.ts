import { Expression } from './Expression';
import { DurationSetter } from '../../../types';

export class DurationExpression extends Expression<DurationSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'DURATION';
    }
    protected setValue (setter: DurationSetter, value: string): void {
        setter.setDuration(value);
    }
}
