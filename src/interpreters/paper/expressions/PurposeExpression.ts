import { Expression } from './Expression';
import { PurposeSetter } from '../../../types';

export class PurposeExpression extends Expression<PurposeSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'PURPOSE';
    }
    protected setValue (value: string, setter: PurposeSetter): void {
        setter.setPurpose(value);
    }
}
