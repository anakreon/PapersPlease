import { Expression } from './Expression';
import { VaccinesSetter, Vaccine } from '../../../types';

export class VaccinesExpression extends Expression<VaccinesSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'VACCINES';
    }
    protected setValue (value: string, setter: VaccinesSetter): void {
        const vaccines = value.split(', ');
        setter.setVaccines(vaccines);
    }
}