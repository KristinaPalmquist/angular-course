import { decrement, increment, set, } from "./counter.actions";
import { createReducer, on } from "@ngrx/store";

const initialState = 0;

export const counterReducer =
  createReducer(
    initialState,
    on(increment, (state, action: { value: number }) => state + action.value),
    on(decrement, (state, action: { value: number }) => state - action.value),
    on(set, (state, action) => action.value),
    // on(init, )

  )
//
// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   if (action.type === DECREMENT) {
//     return state - 1;
//   }
//   return state;
// }
