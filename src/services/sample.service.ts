import { InjectableService } from "../classes/InjectableService.js";

interface NumberEvent {
    numberChanged: CustomEvent<number>;
}

//typesafe event listener
class NumberEventTarget extends EventTarget {
    addNumberListener<K extends keyof NumberEvent>(
        type: K,
        listener: (ev: NumberEvent[K]) => void
    ): void {
        super.addEventListener(type, listener as EventListener);
    }
}

export class SampleService extends InjectableService {

    private count = 0;

    countChangeEventTarget: NumberEventTarget = new NumberEventTarget();

    getCount (): number {
        return this.count;
    }

    incrementCount () : void {
        this.count++;
        this.dispatchCountChangeEvent();
    }

    private dispatchCountChangeEvent () {
        this.countChangeEventTarget.dispatchEvent(
            new CustomEvent<number>('numberChanged', {
                detail: this.getCount()
            })
        );
    }

}