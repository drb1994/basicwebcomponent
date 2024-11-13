const services = new WeakMap<object, InjectableService>();

export class InjectableService {

    constructor(){
        services.set(this.constructor, this);
    }

    static get(): InjectableService {
        let service = services.get(this);
        if (service === undefined)
            service = new this();
        return service;
    }
}