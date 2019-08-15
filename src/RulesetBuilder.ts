import { Ruleset } from './Ruleset';
import { Rule } from './Rule';
import { IdInconsistencyValidator } from './validators/IdInconsistencyValidator';
import { DOBInconsistencyValidator } from './validators/DOBInconsistencyValidator';
import { HeightInconsistencyValidator } from './validators/HeightInconsistencyValidator';
import { NameInconsistencyValidator } from './validators/NameInconsistencyValidator';
import { WeightInconsistencyValidator } from './validators/WeightInconsistencyValidator';
import { Bulletin } from './Bulletin';

export class RulesetBuilder {
    private deny: Rule[] = [];
    private detain: Rule[] = [
        new Rule(new IdInconsistencyValidator(), 'ID number mismatch'),
        new Rule(new DOBInconsistencyValidator(), 'Date of birth mismatch'),
        new Rule(new HeightInconsistencyValidator(), 'Height mismatch'),
        new Rule(new NameInconsistencyValidator(), 'Name mismatch'),
        new Rule(new WeightInconsistencyValidator(), 'Weight mismatch')
    ];

    public fromBulletin (bulletin: Bulletin): void {
        
    }

    public getRuleset (): Ruleset {
        return new Ruleset(this.deny, this.detain);
    }
}