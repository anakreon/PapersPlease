import { Rule } from './Rule';
import { Papers } from './types';

export class Ruleset {
    constructor (private detain: Rule[], private deny: Rule[]) {}

    public getDetainmentRule (papers: Papers): Rule {
        return this.detain.find((rule: Rule) => rule.test(papers));
    }
    public getDenialRule (papers: Papers): Rule {
        return this.deny.find((rule: Rule) => rule.test(papers));
    }
}
