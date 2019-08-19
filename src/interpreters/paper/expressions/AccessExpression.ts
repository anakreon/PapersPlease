import { Expression } from './Expression';
import { AccessSetter, Nation } from '../../../types';

export class AccessExpression extends Expression<AccessSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'ACCESS';
    }
    protected setValue (setter: AccessSetter, value: Nation): void {
        setter.setAccess(value);
    }
}