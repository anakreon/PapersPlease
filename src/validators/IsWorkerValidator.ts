import { Validator, Papers } from '../types';

export class IsWorkerValidator implements Validator {
    public validate (papers: Papers): boolean {
        const accessPermit = papers.getAccessPermit();
        return accessPermit && accessPermit.isWorkPermit();
    }
}