import { Expression } from './Expression';
import { PurposeSetter } from '../../../types';

export class PurposeExpression extends Expression<PurposeSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'PURPOSE';
    }
    protected setValue (setter: PurposeSetter, value: string): void {
        setter.setPurpose(value);
    }
}
