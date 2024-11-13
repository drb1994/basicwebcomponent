import { InjectableService } from "../classes/InjectableService.js";
//typesafe event listener
class NumberEventTarget extends EventTarget {
    addNumberListener(type, listener) {
        super.addEventListener(type, listener);
    }
}
export class SampleService extends InjectableService {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.countChangeEventTarget = new NumberEventTarget();
    }
    getCount() {
        return this.count;
    }
    incrementCount() {
        this.count++;
        this.dispatchCountChangeEvent();
    }
    dispatchCountChangeEvent() {
        this.countChangeEventTarget.dispatchEvent(new CustomEvent('numberChanged', {
            detail: this.getCount()
        }));
    }
}
