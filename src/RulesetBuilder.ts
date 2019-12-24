import { Ruleset } from './Ruleset';
import { Rule } from './Rule';
import { Bulletin } from './Bulletin';
import { Nation, Document, Vaccine } from './types';
import { Arstotzka } from './constants';

import { DOBConsistencyValidator } from './validators/consistencyValidators/DOBConsistencyValidator';
import { HeightConsistencyValidator } from './validators/consistencyValidators/HeightConsistencyValidator';
import { IdConsistencyValidator } from './validators/consistencyValidators/IdConsistencyValidator';
import { NameConsistencyValidator } from './validators/consistencyValidators/NameConsistencyValidator';
import { NationConsistencyValidator } from './validators/consistencyValidators/NationConsistencyValidator';
import { WeightConsistencyValidator } from './validators/consistencyValidators/WeightConsistencyValidator';

import { HasAccessPermitValidator } from './validators/hasPaperValidators/HasAccessPermitValidator';
import { HasCertificateOfVaccinationValidator } from './validators/hasPaperValidators/HasCertificateOfVaccinationValidator';
import { HasDiplomaticAuthorizationValidator } from './validators/hasPaperValidators/HasDiplomaticAuthorizationValidator';
import { HasIdCardValidator } from './validators/hasPaperValidators/HasIdCardValidator';
import { HasGrantOfAsylumValidator } from './validators/hasPaperValidators/HasGrantOfAsylumValidator';
import { HasPassportValidator } from './validators/hasPaperValidators/HasPassportValidator';
import { HasVaccinationValidator } from './validators/hasPaperValidators/HasVaccinationValidator';
import { HasWorkPassValidator } from './validators/hasPaperValidators/HasWorkPassValidator';

import { IsAccessPermitExpiredValidator } from './validators/isPaperExpiredValidators/IsAccessPermitExpiredValidator';
import { IsDiplomaticAuthorizationExpiredValidator } from './validators/isPaperExpiredValidators/IsDiplomaticAuthorizationExpiredValidator';
import { IsGrantOfAsylumExpiredValidator } from './validators/isPaperExpiredValidators/IsGrantOfAsylumExpiredValidator';
import { IsPassportExpiredValidator } from './validators/isPaperExpiredValidators/IsPassportExpiredValidator';

import { DisjunctiveValidator } from './validators/DisjunctiveValidator';
import { ImplicativeValidator } from './validators/ImplicativeValidator';
import { IsAWantedCriminalValidator } from './validators/IsAWantedCriminalValidator';
import { IsCitizenOfNationValidator } from './validators/IsCitizenOfNationValidator';
import { IsCitizenOfUnknownNationValidator } from './validators/IsCitizenOfUnknownNationValidator';
import { IsWorkerValidator } from './validators/IsWorkerValidator';
import { IsValidDiplomaticAuthorizationValidator } from './validators/IsValidDiplomaticAuthorizationValidator';
import { NegateValidator } from './validators/NegateValidator';

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
        this.addPriorityWantedCriminalRule(bulletin);
        this.addRulesForDocumentsRequiredForNations(bulletin);
        this.addRulesForBannedNations(bulletin);
        this.addRulesForDocumentsRequiredForWorkers(bulletin);
        this.addRulesForVaccinationsRequiredForNations(bulletin);
    }
    private addPriorityWantedCriminalRule (bulletin: Bulletin): void {
        const wantedName = bulletin.getWantedName();
        if (wantedName) {
            this.detain.unshift(new Rule(new IsAWantedCriminalValidator(wantedName), 'Entrant is a wanted criminal.'));
        }
    }
    private addRulesForDocumentsRequiredForNations (bulletin: Bulletin): void {
        const requiredDocumentsByNation = bulletin.getRequiredDocumentsByNation();
        for (var nation in requiredDocumentsByNation) {
            if (requiredDocumentsByNation.hasOwnProperty(nation)) {
                requiredDocumentsByNation[nation].forEach((document: Document) => {
                    this.addDocumentValidatorsForNation(<Nation>nation, document);
                });
            }
        }
    }
    private addRulesForBannedNations (bulletin: Bulletin): void {
        bulletin.getDeniedNations().forEach((nation: Nation) => {
            this.deny.push(new Rule(new IsCitizenOfNationValidator(nation), 'citizen of banned nation.'));
        });
    }
    private addRulesForDocumentsRequiredForWorkers (bulletin: Bulletin): void {
        const requiredDocumentsForWorkers = bulletin.getRequiredDocumentsForWorkers();
        requiredDocumentsForWorkers.forEach((document: Document) => {
            this.addDocumentValidatorsForWorkers(document);
        });
    }
    private addRulesForVaccinationsRequiredForNations (bulletin: Bulletin): void {
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