import { Expression } from './expressions/Expression';
import { NameExpression } from './expressions/NameExpression';
import { HeightExpression } from './expressions/HeightExpression';
import { WeightExpression } from './expressions/WeightExpression';
import { IdCard } from '../../papers/IdCard';

export class IdCardInterpreter {

    public interpret (input: string): IdCard {
        const idCard = new IdCard();
        const tree = <Expression<IdCard>[]> [];
        tree.push(new NameExpression());
        tree.push(new HeightExpression());
        tree.push(new WeightExpression());
        
        tree.forEach((expression: Expression<IdCard>) => {
            expression.interpret(input, idCard);
        });
    
        return idCard;
    }
}