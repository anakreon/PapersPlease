export abstract class Expression<T> {
    public interpret (input: string, setter: T) {
        const lines = input.split('\n');
        lines.forEach((line: string) => {
            const lineDecomposition = line.trim().match(/^([A-Z#]*):\ (.*)$/);
            if (lineDecomposition.length != 3) {
                throw 'Invalid input: ' + line;
            }
            const name = lineDecomposition[1];
            const value = lineDecomposition[2];
            if (this.isHandledName(name)) {
                this.setValue(setter, value);
            }
        });
    }

    protected abstract isHandledName (name: string): boolean;
    protected abstract setValue (setter: T, value: string): void
}
