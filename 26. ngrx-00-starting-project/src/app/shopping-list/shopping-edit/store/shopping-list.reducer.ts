import { Action, createReducer, on } from "@ngrx/store";
import { state } from "@angular/animations";
import { Ingredient } from "../../../shared/ingredient.model";

const initialState = {
  ingredients:  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}

// export const shoppingListReducer = createReducer(
//  initialState,
//
//   on('ADD_INGREDIENT',
//     (state: Ingredient[], action: Action) => {
//
//   }),

export function shoppingListReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, (action as { type: string, ingredient: Ingredient }).ingredient]
      }
    default:
      return state;
  }
  }




