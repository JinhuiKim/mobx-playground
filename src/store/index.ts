/**
 * 사용할 컴포넌트에서 따로 import 해도 됨
 * 실습에서는 하나의 stroe에 import
 */
import countClass from "./countClass";
import countObject from "./countObject";

const store = { countClass, countObject };
export default store;
