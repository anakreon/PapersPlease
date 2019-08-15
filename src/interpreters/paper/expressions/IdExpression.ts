import { Expression } from './Expression';
import { IdSetter } from '../../../types';

export class IdExpression extends Expression<IdSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'ID#';
    }
    protected setValue (setter: IdSetter, value: string): void {
        setter.setId(value);
    }
}
