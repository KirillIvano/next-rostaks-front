export class Debouncer {
    private _timeoutId: number | null = null;

    constructor(
        private _timeoutMS: number,
    ) {}

    cancel = () =>
        this._timeoutId && clearTimeout(this._timeoutId);

    fire = (func: () => void) => {
        if (this._timeoutId !== null) {
            clearTimeout(this._timeoutId);
        }

        this._timeoutId = window.setTimeout(func, this._timeoutMS);
    }
}
