export abstract class Expression<T> {
    public interpret (input: string, setter: T) {
        input
            .split('\n')
            .forEach((line: string) => this.interpretLine(line, setter));
    }

    private interpretLine (line: string, setter: T): void {
        const regExp = /^([A-Z#]*):\ (.*)$/;
        const lineDecomposition = line.trim().match(regExp);
        if (lineDecomposition.length != 3) {
            throw 'Invalid input: ' + line;
        }
        const [all, name, value] = lineDecomposition;
        if (this.isHandledName(name)) {
            this.setValue(value, setter);
        }
    }

    protected abstract isHandledName (name: string): boolean;
    protected abstract setValue (value: string, setter: T): void
}
