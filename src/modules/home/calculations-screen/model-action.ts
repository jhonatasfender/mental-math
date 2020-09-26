export class ModelAction {
    private keys: string[] = []

    private listeners: any = []

    public addKey(key: string) {
        this.keys.push(key);
        this.notify();
    }

    public delKey() {
        this.keys.pop();
        this.notify();
    }

    public clearAll() {
        this.keys = [];
        this.notify();
    }

    public getKeys() {
        return this.keys;
    }

    public onChange(listener: (m: ModelAction) => void) {
        this.listeners.push(listener);
    }

    public notify() {
        this.listeners.forEach((listner: (m: ModelAction) => void) => {
            listner(this);
        });
    }
};
