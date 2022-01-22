import produce from "immer";
import { createStore } from "redux";

const defaultSate = {
    counter: 0
};

const reducer = produce((draft, action) => {
  if (action.type === "increment") {
    draft.counter++;
  } else if (action.type === "decrement") {
    draft.counter--;
  }
}, defaultSate);
const store = createStore(reducer);
export default store;
