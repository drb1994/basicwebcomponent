const services = new WeakMap();
export class InjectableService {
    constructor() {
        services.set(this.constructor, this);
    }
    static get() {
        let service = services.get(this);
        if (service === undefined)
            service = new this();
        return service;
    }
}
