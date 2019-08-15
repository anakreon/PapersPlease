import { Expression } from './expressions/Expression';
import { NameExpression } from './expressions/NameExpression';
import { NationExpression } from './expressions/NationExpression';
import { PurposeExpression } from './expressions/PurposeExpression';
import { DurationExpression } from './expressions/DurationExpression';
import { HeightExpression } from './expressions/HeightExpression';
import { WeightExpression } from './expressions/WeightExpression';
import { ExpiryExpression } from './expressions/ExpiryExpression';
import { IdExpression } from './expressions/IdExpression';
import { AccessPermit } from '../../papers/AccessPermit';

export class AccessPermitInterpreter {

    public interpret (input: string): AccessPermit {
        const accessPermit = new AccessPermit();
        const tree = <Expression<AccessPermit>[]> [];
        tree.push(new IdExpression());
        tree.push(new NameExpression());
        tree.push(new NationExpression());
        tree.push(new PurposeExpression());
        tree.push(new DurationExpression());
        tree.push(new HeightExpression());
        tree.push(new WeightExpression());
        tree.push(new ExpiryExpression());
        
        tree.forEach((expression: Expression<AccessPermit>) => {
            expression.interpret(input, accessPermit);
        });
    
        return accessPermit;
    }
}