import { action, makeObservable, observable } from "mobx"; // makeObservable
import { makeAutoObservable } from "mobx"; // makeAutoObservable

class Count {
  number: number = 0;

  constructor() {
    /**
     * makeObservable, makeAutoObservable
     * makeAutoObservable가 깔끔하긴 하나, super나 subclassed에서는 사용이 불가
     */
    // **** makeObservable
    /*
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    })
    */

    // **** makeAutoObservable
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const countStore = new Count();
export default countStore;
