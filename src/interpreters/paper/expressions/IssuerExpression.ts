import { Expression } from './Expression';
import { IssuerSetter } from '../../../types';

export class IssuerExpression extends Expression<IssuerSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'ISS';
    }
    protected setValue (setter: IssuerSetter, value: string): void {
        setter.setIssuer(value);
    }
}
