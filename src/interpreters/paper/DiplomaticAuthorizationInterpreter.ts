import { Expression } from './expressions/Expression';
import { NameExpression } from './expressions/NameExpression';
import { NationExpression } from './expressions/NationExpression';
import { ExpiryExpression } from './expressions/ExpiryExpression';
import { IdExpression } from './expressions/IdExpression';
import { DiplomaticAuthorization } from '../../papers/DiplomaticAuthorization';
import { AccessExpression } from './expressions/AccessExpression';

export class DiplomaticAuthorizationInterpreter {

    public interpret (input: string): DiplomaticAuthorization {
        const diplomaticAuthorization = new DiplomaticAuthorization();
        const tree = <Expression<DiplomaticAuthorization>[]> [];
        tree.push(new IdExpression());
        tree.push(new AccessExpression());
        tree.push(new NameExpression());
        tree.push(new NationExpression());
        tree.push(new ExpiryExpression());
        
        tree.forEach((expression: Expression<DiplomaticAuthorization>) => {
            expression.interpret(input, diplomaticAuthorization);
        });
    
        return diplomaticAuthorization;
    }
}