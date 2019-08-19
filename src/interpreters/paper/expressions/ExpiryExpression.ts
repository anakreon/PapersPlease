import { Expression } from './Expression';
import { ExpirySetter } from '../../../types';

export class ExpiryExpression extends Expression<ExpirySetter> {
    protected isHandledName (name: string): boolean {
        return name === 'EXP';
    }
    protected setValue (value: string, setter: ExpirySetter): void {
        const isoDate = value.replace(/\./g, '-');
        const date = new Date(isoDate);
        setter.setExpirationDate(date);
    }
}
