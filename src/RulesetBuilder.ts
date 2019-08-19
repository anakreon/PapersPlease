import { Ruleset } from './Ruleset';
import { Rule } from './Rule';
import { IdConsistencyValidator } from './validators/IdConsistencyValidator';
import { DOBConsistencyValidator } from './validators/DOBConsistencyValidator';
import { HeightConsistencyValidator } from './validators/HeightConsistencyValidator';
import { NameConsistencyValidator } from './validators/NameConsistencyValidator';
import { WeightConsistencyValidator } from './validators/WeightConsistencyValidator';
import { Bulletin } from './Bulletin';
import { Nation, Document, Validator, Vaccine } from './types';
import { IsCitizenOfNationValidator } from './validators/IsCitizenOfNationValidator';
import { ImplicativeValidator } from './validators/ImplicativeValidator';
import { HasPassportValidator } from './validators/HasPassportValidator';
import { HasAccessPermitValidator } from './validators/HasAccessPermitValidator';
import { HasGrantOfAsylumValidator } from './validators/HasGrantOfAsylumValidator';
import { HasDiplomaticAuthorizationValidator } from './validators/HasDiplomaticAuthorizationValidator';
import { IsWorkerValidator } from './validators/IsWorkerValidator';
import { IsAWantedCriminalValidator } from './validators/IsAWantedCriminalValidator';
import { IsPassportExpiredValidator } from './validators/IsPassportExpiredValidator';
import { IsAccessPermitExpiredValidator } from './validators/IsAccessPermitExpiredValidator';
import { IsGrantOfAsylumExpiredValidator } from './validators/IsGrantOfAsylumExpiredValidator';
import { IsDiplomaticAuthorizationExpiredValidator } from './validators/IsDiplomaticAuthorizationExpiredValidator';
import { NegateValidator } from './validators/NegateValidator';
import { NationConsistencyValidator } from './validators/NationConsistencyValidator';
import { HasIdCardValidator } from './validators/HasIDCardValidator';
import { HasVaccinationValidator } from './validators/HasVaccinationValidator';
import { Arstotzka } from './constants';
import { DisjunctiveValidator } from './validators/DisjunctiveValidator';
import { HasWorkPassValidator } from './validators/HasWorkPassValidator';
import { HasCertificateOfVaccinationValidator } from './validators/HasCertificateOfVaccinationValidator';
import { IsValidDiplomaticAuthorizationValidator } from './validators/IsValidDiplomaticAuthorizationValidator';
import { IsCitizenOfUnknownNationValidator } from './validators/IsCitizenOfUnknownNationValidator';

export class RulesetBuilder {
    private deny: Rule[] = [
        new Rule(new IsCitizenOfUnknownNationValidator(), 'missing required passport.')
    ];
    private detain: Rule[] = [
        new Rule(new NegateValidator(new IdConsistencyValidator()), 'ID number mismatch.'),
        new Rule(new NegateValidator(new DOBConsistencyValidator()), 'Date of birth mismatch.'),
        new Rule(new NegateValidator(new HeightConsistencyValidator()), 'Height mismatch.'),
        new Rule(new NegateValidator(new NameConsistencyValidator()), 'Name mismatch.'),
        new Rule(new NegateValidator(new NationConsistencyValidator()), 'nationality mismatch.'),
        new Rule(new NegateValidator(new WeightConsistencyValidator()), 'Weight mismatch.')
    ];

    public fromBulletin (bulletin: Bulletin): void {
        const wantedName = bulletin.getWantedName();
        if (wantedName) {
            this.detain.unshift(new Rule(new IsAWantedCriminalValidator(wantedName), 'Entrant is a wanted criminal.'));
        }
        const requiredDocumentsByNation = bulletin.getRequiredDocumentsByNation();
        for (var nation in requiredDocumentsByNation) {
            if (requiredDocumentsByNation.hasOwnProperty(nation)) {
                requiredDocumentsByNation[nation].forEach((document: Document) => {
                    this.addDocumentValidatorsForNation(<Nation>nation, document);
                });
            }
        }
        bulletin.getDenied().forEach((nation: Nation) => {
            this.deny.push(new Rule(new IsCitizenOfNationValidator(nation), 'citizen of banned nation.'));
        });
        const requiredDocumentsForWorkers = bulletin.getrequiredDocumentsForWorkers();
        requiredDocumentsForWorkers.forEach((document: Document) => {
            this.addDocumentValidatorsForWorkers(document);
        });
        const requiredVaccinationsByNation = bulletin.getRequiredVaccinationsByNation();
        for (var nation in requiredVaccinationsByNation) {
            if (requiredVaccinationsByNation.hasOwnProperty(nation)) {
                requiredVaccinationsByNation[nation].forEach((vaccine: Vaccine) => {
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasCertificateOfVaccinationValidator())), 'missing required certificate of vaccination.'));
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasVaccinationValidator(vaccine))), 'missing required vaccination.'));
                });
            }
        }
    }

    private addDocumentValidatorsForNation (nation: Nation, document: Document) {
        switch (document) {
            case 'passport':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasPassportValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new NegateValidator(new IsPassportExpiredValidator()))), document + ' expired.'));
                break;
            case 'ID card':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasIdCardValidator())), 'missing required ' + document + '.'));
                break;
            case 'access permit':
                if (nation === Arstotzka) {
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasAccessPermitValidator())), 'missing required ' + document + '.'));
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new NegateValidator(new IsAccessPermitExpiredValidator()))), document + ' expired.'));
                } else {
                    const hasAccessPermit = new HasAccessPermitValidator();
                    const hasGrantOfAsylumOrDiplomaticAuthorization = new DisjunctiveValidator(new HasGrantOfAsylumValidator(), new HasDiplomaticAuthorizationValidator());
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new DisjunctiveValidator(hasAccessPermit, hasGrantOfAsylumOrDiplomaticAuthorization))), 'missing required ' + document + '.'));
                    const ifHasAccessPermitItIsValid = new ImplicativeValidator(hasAccessPermit, new NegateValidator(new IsAccessPermitExpiredValidator()));
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), ifHasAccessPermitItIsValid)), document + ' expired.'));
                    const ifHasGrantOfAsylumItIsNotExpired = new ImplicativeValidator(new HasGrantOfAsylumValidator(), new NegateValidator(new IsGrantOfAsylumExpiredValidator()));
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), ifHasGrantOfAsylumItIsNotExpired)), 'grant of asylum expired.'));
                    const ifHasDiplomaticAuthorizationItIsNotExpired = new ImplicativeValidator(new HasDiplomaticAuthorizationValidator(), new NegateValidator(new IsDiplomaticAuthorizationExpiredValidator()));
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), ifHasDiplomaticAuthorizationItIsNotExpired)), 'diplomatic authorization expired.'));
                    const ifHasDiplomaticAuthorizationItIsValid = new ImplicativeValidator(new HasDiplomaticAuthorizationValidator(), new IsValidDiplomaticAuthorizationValidator());
                    this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), ifHasDiplomaticAuthorizationItIsValid)), 'invalid diplomatic authorization.'));
                }
                break;
            case 'work pass':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasWorkPassValidator())), 'missing required ' + document + '.'));
                break;
            case 'grant of asylum':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasGrantOfAsylumValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new NegateValidator(new IsGrantOfAsylumExpiredValidator()))), document + ' expired.'));
                break;
            case 'diplomatic authorization':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new HasDiplomaticAuthorizationValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsCitizenOfNationValidator(nation), new NegateValidator(new IsDiplomaticAuthorizationExpiredValidator()))), document + ' expired.'));
                break;
        }
    }

    private addDocumentValidatorsForWorkers (document: Document) {
        switch (document) {
            case 'passport':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new HasPassportValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new NegateValidator(new IsPassportExpiredValidator()))), document + ' expired.'));
                break;
            case 'ID card':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new HasIdCardValidator())), 'missing required ' + document + '.'));
                break;
            case 'access permit':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new HasAccessPermitValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new NegateValidator(new IsAccessPermitExpiredValidator()))), document + ' expired.'));
                //if foreigner ->
                //OR
                //grant of asylum - valid
                //OR
                //diplomatic authorization - valid & Arstotzka in list of nations
                break;
            case 'work pass':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new HasWorkPassValidator())), 'missing required ' + document + '.'));
                break;
            case 'grant of asylum':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new HasGrantOfAsylumValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new NegateValidator(new IsGrantOfAsylumExpiredValidator()))), document + ' expired.'));
                break;
            case 'diplomatic authorization':
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new HasDiplomaticAuthorizationValidator())), 'missing required ' + document + '.'));
                this.deny.push(new Rule(new NegateValidator(new ImplicativeValidator(new IsWorkerValidator(), new NegateValidator(new IsDiplomaticAuthorizationExpiredValidator()))), document + ' expired.'));
                break;
        }
    }

    public getRuleset (): Ruleset {
        return new Ruleset(this.detain, this.deny);
    }
}