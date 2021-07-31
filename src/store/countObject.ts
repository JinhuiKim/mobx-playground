import { observable } from "mobx";

/**
 * object로 만들 때는 observable로 감싸주기만 하면 됨
 */
const countObject = observable({
  // 헷갈릴 수 있으니 num으로 작명
  num: 0,
  increase() {
    this.num++;
  },
  decrease() {
    this.num--;
  },
});

export default countObject;
