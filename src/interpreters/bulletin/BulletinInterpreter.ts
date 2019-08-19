import { Bulletin } from '../../Bulletin';
import { Expression } from './expressions/Expression';
import { AllowExpression } from './expressions/AllowExpression';
import { DenyExpression } from './expressions/DenyExpression';
import { NoLongerRequireDocumentForEntrantsExpression } from './expressions/NoLongerRequireDocumentForEntrantsExpression';
import { NoLongerRequireDocumentForNationExpression } from './expressions/NoLongerRequireDocumentForNationExpression';
import { NoLongerRequireDocumentForWorkersExpression } from './expressions/NoLongerRequireDocumentForWorkersExpression';
import { NoLongerRequireVaccinationForEntrantsExpression } from './expressions/NoLongerRequireVaccinationForEntrantsExpression';
import { NoLongerRequireVaccinationForNationExpression } from './expressions/NoLongerRequireVaccinationForNationExpression';
import { NoLongerRequireVaccinationForWorkersExpression } from './expressions/NoLongerRequireVaccinationForWorkersExpression';
import { RequireDocumentForEntrantsExpression } from './expressions/RequireDocumentForEntrantsExpression';
import { RequireDocumentForNationExpression } from './expressions/RequireDocumentForNationExpression';
import { RequireDocumentForWorkersExpression } from './expressions/RequireDocumentForWorkersExpression';
import { RequireVaccinationForEntrantsExpression } from './expressions/RequireVaccinationForEntrantsExpression';
import { RequireVaccinationForNationExpression } from './expressions/RequireVaccinationForNationExpression';
import { RequireVaccinationForWorkersExpression } from './expressions/RequireVaccinationForWorkersExpression';
import { NoLongerRequireVaccinationForForeignersExpression } from './expressions/NoLongerRequireVaccinationForForeignersExpression';
import { NoLongerRequireDocumentForForeignersExpression } from './expressions/NoLongerRequireDocumentForForeignersExpression';
import { RequireDocumentForForeignersExpression } from './expressions/RequireDocumentForForeignersExpression';
import { RequireVaccinationForForeignersExpression } from './expressions/RequireVaccinationForForeignersExpression';
import { WantedByExpression } from './expressions/WantedByExpression';

export class BulletinInterpreter {

    public interpret (bulletin: Bulletin, input: string) {
        bulletin.clearWanted(); //?

        const tree = <Expression[]> [];
        tree.push(new AllowExpression());
        tree.push(new DenyExpression());
        tree.push(new WantedByExpression());
        tree.push(new NoLongerRequireDocumentForEntrantsExpression());
        tree.push(new NoLongerRequireDocumentForForeignersExpression());
        tree.push(new NoLongerRequireDocumentForNationExpression());
        tree.push(new NoLongerRequireDocumentForWorkersExpression());
        tree.push(new NoLongerRequireVaccinationForEntrantsExpression());
        tree.push(new NoLongerRequireVaccinationForForeignersExpression());
        tree.push(new NoLongerRequireVaccinationForNationExpression());
        tree.push(new NoLongerRequireVaccinationForWorkersExpression());
        tree.push(new RequireDocumentForEntrantsExpression());
        tree.push(new RequireDocumentForForeignersExpression());
        tree.push(new RequireDocumentForNationExpression());
        tree.push(new RequireDocumentForWorkersExpression());
        tree.push(new RequireVaccinationForEntrantsExpression());
        tree.push(new RequireVaccinationForForeignersExpression());
        tree.push(new RequireVaccinationForNationExpression());
        tree.push(new RequireVaccinationForWorkersExpression());
        
        tree.forEach((expression: Expression) => {
            expression.interpret(input, bulletin);
        });
    }
}