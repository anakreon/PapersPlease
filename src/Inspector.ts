import { InspectionResult, InputPapers } from './types';
import { Papers } from './Papers';
import { Bulletin } from './Bulletin';
import { BulletinInterpreter } from './interpreters/bulletin/BulletinInterpreter';
import { RulesetBuilder } from './RulesetBuilder';
import { Ruleset } from './Ruleset';
import { PapersInterpreter } from './PapersInterpreter';

export class Inspector {
    private bulletin: Bulletin;
    private ruleset: Ruleset;

    constructor () {
        this.bulletin = new Bulletin();
    }
    
    public receiveBulletin (inputBulletin: string): void {
        this.updateBulletin(inputBulletin);
        this.ruleset = this.buildRuleset();
    }
    private updateBulletin (inputBulletin: string): void {
        this.bulletin.clearWanted();
        const interpreter = new BulletinInterpreter();
        interpreter.interpret(inputBulletin, this.bulletin);
    }
    private buildRuleset (): Ruleset {
        const rulesetBuilder = new RulesetBuilder();
        rulesetBuilder.fromBulletin(this.bulletin);
        return rulesetBuilder.getRuleset();
    }

    public inspect (inputPapers: InputPapers): InspectionResult {
        const papers = this.buildPapers(inputPapers);

        const detainmentRule = this.ruleset.getDetainmentRule(papers);
        if (detainmentRule) {
            return 'Detainment: ' + detainmentRule.getMessage();
        }

        const denialRule = this.ruleset.getDenialRule(papers);
        if (denialRule) {
            return 'Entry denied: ' + denialRule.getMessage();
        }
        
        const personalData = papers.getPersonalData();
        if (personalData.isNationalOfArstotzka()) {
            return 'Glory to Arstotzka.';
        } else {
            return 'Cause no trouble.';
        }
    }

    private buildPapers (inputPapers: InputPapers): Papers {
        const interpreter = new PapersInterpreter();
        return interpreter.interpret(inputPapers);
    }
}