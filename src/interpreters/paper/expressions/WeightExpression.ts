import { Expression } from './Expression';
import { WeightSetter } from '../../../types';

export class WeightExpression extends Expression<WeightSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'WEIGHT';
    }
    protected setValue (value: string, setter: WeightSetter): void {
        setter.setWeight(value);
    }
}
