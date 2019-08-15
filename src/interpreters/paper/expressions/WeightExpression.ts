import { Expression } from './Expression';
import { WeightSetter } from '../../../types';

export class WeightExpression extends Expression<WeightSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'WEIGHT';
    }
    protected setValue (setter: WeightSetter, value: string): void {
        setter.setWeight(value);
    }
}
