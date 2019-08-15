import { GrantOfAsylum } from '../../papers/GrantOfAsylum';
import { Expression } from './expressions/Expression';
import { IdExpression } from './expressions/IdExpression';
import { NameExpression } from './expressions/NameExpression';
import { NationExpression } from './expressions/NationExpression';
import { ExpiryExpression } from './expressions/ExpiryExpression';
import { DOBExpression } from './expressions/DOBExpression';
import { HeightExpression } from './expressions/HeightExpression';
import { WeightExpression } from './expressions/WeightExpression';

export class GrantOfAsylumInterpreter {

    public interpret (input: string): GrantOfAsylum {
        const grantOfAsylum = new GrantOfAsylum();
        const tree = <Expression<GrantOfAsylum>[]> [];
        tree.push(new IdExpression());
        tree.push(new NameExpression());
        tree.push(new NationExpression());
        tree.push(new ExpiryExpression());
        tree.push(new DOBExpression());
        tree.push(new HeightExpression());
        tree.push(new WeightExpression());        
        
        tree.forEach((expression: Expression<GrantOfAsylum>) => {
            expression.interpret(input, grantOfAsylum);
        });
    
        return grantOfAsylum;
    }
}