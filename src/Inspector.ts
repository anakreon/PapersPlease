import { InspectionResult, InputPapers } from './types';
import { Papers } from './Papers';
import { AccessPermitInterpreter } from './interpreters/paper/AccessPermitInterpreter';
import { DiplomaticAuthorizationInterpreter } from './interpreters/paper/DiplomaticAuthorizationInterpreter';
import { GrantOfAsylumInterpreter } from './interpreters/paper/GrantOfAsylumInterpreter';
import { PassportInterpreter } from './interpreters/paper/PassportInterpreter';
import { Bulletin } from './Bulletin';
import { BulletinInterpreter } from './interpreters/bulletin/BulletinInterpreter';
import { RulesetBuilder } from './RulesetBuilder';
import { Ruleset } from './Ruleset';


export class Inspector {
    private bulletin: Bulletin;
    private ruleset: Ruleset;

    constructor () {
        this.bulletin = new Bulletin();
    }
    
    public receiveBulletin (inputBulletin: string): void {
        const interpreter = new BulletinInterpreter();
        interpreter.interpret(this.bulletin, inputBulletin);
        const rulesetBuilder = new RulesetBuilder();
        rulesetBuilder.fromBulletin(this.bulletin);
        this.ruleset = rulesetBuilder.getRuleset();
    }

    public inspect (inputPapers: InputPapers): InspectionResult {

        const papers = this.buildPapers(inputPapers);
        const detainmentRule = this.ruleset.getDetainmentRule(papers);
        if (detainmentRule) {
            return 'Detainment: ' + detainmentRule.getErrorMessage();
        }
        const denialRule = this.ruleset.getDenialRule(papers);
        if (denialRule) {
            return 'Entry denied: ' + denialRule.getErrorMessage();
        }
        
        if (papers.getPersonalData().getNation() === 'Arstotzka') {
            return 'Glory to Arstotzka.';
        } else {
            return 'Cause no trouble.';
        }
    }

    private buildPapers (inputPapers: InputPapers): Papers {
        const papers = new Papers();
        if (inputPapers.access_permit) {
            const interpreter = new AccessPermitInterpreter();
            const accessPermit = interpreter.interpret(inputPapers.access_permit);
            papers.setAccessPermit(accessPermit);
        }
        if (inputPapers.diplomatic_authorization) {
            const interpreter = new DiplomaticAuthorizationInterpreter();
            const diplomaticAuthorization = interpreter.interpret(inputPapers.diplomatic_authorization);
            papers.setDiplomaticAuthorization(diplomaticAuthorization);
        }
        if (inputPapers.grant_of_asylum) {
            const interpreter = new GrantOfAsylumInterpreter();
            const grantOfAsylum = interpreter.interpret(inputPapers.grant_of_asylum);
            papers.setGrantOfAsylum(grantOfAsylum);
        }
        if (inputPapers.passport) {
            const interpreter = new PassportInterpreter();
            const passport = interpreter.interpret(inputPapers.passport);
            papers.setPassport(passport);
        }
        return papers;
    }
}