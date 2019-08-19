import { Expression } from './expressions/Expression';
import { AccessPermit } from '../../papers/AccessPermit';
import { WorkPass } from '../../papers/WorkPass';

export class WorkPassInterpreter {

    public interpret (input: string): WorkPass {
        const accessPermit = new AccessPermit();
        const tree = <Expression<AccessPermit>[]> [];
    
        tree.forEach((expression: Expression<AccessPermit>) => {
            expression.interpret(input, accessPermit);
        });
    
        return accessPermit;
    }
}