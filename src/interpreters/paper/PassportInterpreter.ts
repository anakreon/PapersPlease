import { Passport } from '../../papers/Passport';
import { Expression } from './expressions/Expression';
import { IdExpression } from './expressions/IdExpression';
import { NameExpression } from './expressions/NameExpression';
import { NationExpression } from './expressions/NationExpression';
import { ExpiryExpression } from './expressions/ExpiryExpression';
import { DOBExpression } from './expressions/DOBExpression';
import { SexExpression } from './expressions/SexExpression';
import { IssuerExpression } from './expressions/IssuerExpression';

export class PassportInterpreter {

    public interpret (input: string): Passport {
        const passport = new Passport();
        const tree = <Expression<Passport>[]> [];
        tree.push(new IdExpression());
        tree.push(new NameExpression());
        tree.push(new NationExpression());
        tree.push(new ExpiryExpression());
        tree.push(new DOBExpression());
        tree.push(new SexExpression());
        tree.push(new IssuerExpression());
        
        tree.forEach((expression: Expression<Passport>) => {
            expression.interpret(input, passport);
        });
    
        return passport;
    }
}