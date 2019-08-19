import { Expression } from './Expression';
import { IssuerSetter } from '../../../types';

export class IssuerExpression extends Expression<IssuerSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'ISS';
    }
    protected setValue (value: string, setter: IssuerSetter): void {
        setter.setIssuer(value);
    }
}
