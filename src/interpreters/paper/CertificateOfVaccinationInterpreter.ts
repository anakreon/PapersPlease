import { CertificateOfVaccination } from '../../papers/CertificateOfVaccination';
import { Expression } from './expressions/Expression';
import { IdExpression } from './expressions/IdExpression';
import { NameExpression } from './expressions/NameExpression';
import { VaccinesExpression } from './expressions/VaccinesExpression';

export class CertificateOfVaccinationInterpreter {

    public interpret (input: string): CertificateOfVaccination {
        const certificateOfVaccination = new CertificateOfVaccination();
        const tree = <Expression<CertificateOfVaccination>[]> [];
        tree.push(new IdExpression());
        tree.push(new NameExpression());
        tree.push(new VaccinesExpression());
                
        tree.forEach((expression: Expression<CertificateOfVaccination>) => {
            expression.interpret(input, certificateOfVaccination);
        });
    
        return certificateOfVaccination;
    }
}