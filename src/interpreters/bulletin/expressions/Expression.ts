import { Bulletin } from '../../../Bulletin';

export abstract class Expression {
    public interpret (input: string, bulletin: Bulletin): void {
        const lines = input.split('\n');
        lines
            .filter((line: string) => !this.shouldIgnoreLine(line))
            .forEach((line: string) => this.interpretLine(line, bulletin));
    }
    private interpretLine (line: string, bulletin: Bulletin): void {
        const regExp = this.getRegExp();
        const lineDecomposition = line.trim().match(regExp);
        if (lineDecomposition) {
            this.processMatches(lineDecomposition.slice(1), bulletin);
        }
    }

    protected abstract getRegExp (): RegExp;
    protected abstract processMatches (matches: string[], bulletin: Bulletin): void;
    protected shouldIgnoreLine (line: string): boolean {
        return false;
    }
}
