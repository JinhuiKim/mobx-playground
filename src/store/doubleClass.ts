import { makeObservable, observable, computed, action } from "mobx"; // makeObservable
import { makeAutoObservable } from "mobx"; // makeAutoObservable

class Doubler {
  value;

  constructor(value: number) {
    /**
     * makeObservable, makeAutoObservable
     */
    // **** makeObservable
    /*
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
    });
    */

    // **** makeAutoObservable
    makeAutoObservable(this);
    // makeAutoObservable이 다른 action, computed를 자동으로 선언

    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}

const doubleClass = new Doubler(1);
export default doubleClass;
