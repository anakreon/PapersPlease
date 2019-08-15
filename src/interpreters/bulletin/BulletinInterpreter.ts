import { Bulletin } from '../../Bulletin';
import { Expression } from './expressions/Expression';
import { AllowDenyExpression } from './expressions/AllowDenyExpression';
import { RequireExpression } from './expressions/RequireExpression';
import { WantedByExpression } from './expressions/WantedByExpression';

export class BulletinInterpreter {

    public interpret (bulletin: Bulletin, input: string) {
        bulletin.clearWanted(); //?

        const tree = <Expression[]> [];
        tree.push(new AllowDenyExpression());
        tree.push(new RequireExpression());
        tree.push(new WantedByExpression());
        
        tree.forEach((expression: Expression) => {
            expression.interpret(input, bulletin);
        });
    }
}