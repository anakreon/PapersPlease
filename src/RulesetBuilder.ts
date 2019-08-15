import { Ruleset } from './Ruleset';
import { Rule } from './Rule';
import { IdInconsistencyValidator } from './validators/IdInconsistencyValidator';
import { DOBInconsistencyValidator } from './validators/DOBInconsistencyValidator';
import { HeightInconsistencyValidator } from './validators/HeightInconsistencyValidator';
import { NameInconsistencyValidator } from './validators/NameInconsistencyValidator';
import { WeightInconsistencyValidator } from './validators/WeightInconsistencyValidator';
import { Bulletin } from './Bulletin';
import { Nation, Document, Validator, Group } from './types';
import { IsCitizenOfNationValidator } from './validators/IsCitizenOfNationValidator';
import { ImplicativeValidator } from './validators/ImplicativeValidator';
import { HasPassportValidator } from './validators/HasPassportValidator';
import { HasAccessPermitValidator } from './validators/HasAccessPermitValidator';
import { HasGrantOfAsylumValidator } from './validators/HasGrantOfAsylumValidator';
import { HasDiplomaticAuthorizationValidator } from './validators/HasDiplomaticAuthorizationValidator';
import { IsWorkerValidator } from './validators/IsWorkerValidator';
import { IsNotAWantedCriminalValidator } from './validators/IsNotAWantedCriminalValidator';

export class RulesetBuilder {
    private deny: Rule[] = [];
    private detain: Rule[] = [
        new Rule(new IdInconsistencyValidator(), 'ID number mismatch.'),
        new Rule(new DOBInconsistencyValidator(), 'Date of birth mismatch.'),
        new Rule(new HeightInconsistencyValidator(), 'Height mismatch.'),
        new Rule(new NameInconsistencyValidator(), 'Name mismatch.'),
        new Rule(new WeightInconsistencyValidator(), 'Weight mismatch.')
    ];

    public fromBulletin (bulletin: Bulletin): void {
        bulletin.getDenied().forEach((nation: Nation) => {
            this.deny.push(new Rule(new IsCitizenOfNationValidator(nation), nation + ' citizens not allowed.'));
        });
        const requiredDocumentsByNation = bulletin.getRequiredDocumentsByNation();
        for (var nation in requiredDocumentsByNation) {
            if (requiredDocumentsByNation.hasOwnProperty(nation)) {
                requiredDocumentsByNation[nation].forEach((document: Document) => {
                    const documentValidator = this.getDocumentValidator(document);
                    this.deny.push(new Rule(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), documentValidator), 'missing required ' + document + '.'));
                });
            }
        }
        const requiredDocumentsByGroup = bulletin.getRequiredDocumentsByGroup();
        for (var group in requiredDocumentsByGroup) {
            if (requiredDocumentsByGroup.hasOwnProperty(group)) {
                requiredDocumentsByGroup[group].forEach((document: Document) => {
                    const groupValidator = this.getGroupValidator(<Group>group);
                    const documentValidator = this.getDocumentValidator(document);
                    this.deny.push(new Rule(new ImplicativeValidator(groupValidator, documentValidator), 'missing required ' + document + '.'));
                });
            }
        }
        const wantedName = bulletin.getWantedName();
        if (wantedName) {
            this.detain.push(new Rule(new IsNotAWantedCriminalValidator(wantedName), 'Entrant is a wanted criminal.'));
        }
    }

    private getDocumentValidator (document: Document): Validator {
        let documentValidator;
        switch (document) {
            case 'passport':
                documentValidator = new HasPassportValidator();
                break;
            /*case 'ID card':
                documentValidator = new HasIDCardValidator();
                break;*/
            case 'access permit':
                documentValidator = new HasAccessPermitValidator();
                break;
            /*case 'work pass':
                documentValidator = new HasWorkPassValidator();
                break;*/
            case 'grant of asylum':
                documentValidator = new HasGrantOfAsylumValidator();
                break;
            /*case 'certificate of vaccination':
                documentValidator = new HasCertificateOfVaccinationValidator();
                break;*/
            case 'diplomatic authorization':
                documentValidator = new HasDiplomaticAuthorizationValidator();
                break;
        }
        return documentValidator;
    }

    private getGroupValidator (group: Group): Validator {
        let groupValidator;
        switch (group) {
            case 'Workers': 
                groupValidator = new IsWorkerValidator();
                break;
        }
        return groupValidator;
    }

    public getRuleset (): Ruleset {
        return new Ruleset(this.deny, this.detain);
    }
}