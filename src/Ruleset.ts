import { Rule } from './Rule';
import { Papers } from './types';

export class Ruleset {
    constructor (private deny: Rule[], private detain: Rule[]) {}

    public getDetainmentRule (papers: Papers): Rule {
        return this.detain.find((rule: Rule) => rule.test(papers));
    }
    public getDenialRule (papers: Papers): Rule {
        return this.deny.find((rule: Rule) => rule.test(papers));
    }
}
