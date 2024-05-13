import { Recipe } from "../recipe.model";
import * as RecipesActions  from "./recipe.actions";


export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Tasty Fries & Bearnaise',
      'Dip and enjoy - just awesome!',
      'http://www.happyinthekitchen.com/Site_1/Easy_French_Fries_files/fries%20w%20bearnaise-filtered.jpg',
      [{name: 'Fries', amount: 20}, {name: 'Bearnaise', amount: 1}]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://freshlyspiced.co.uk/wp-content/uploads/2021/04/IMG_4964.jpg',
      [{name: 'Buns', amount: 2}, {name: 'Halloumi', amount: 1}]
    )
  ]
};

export function recipeReducer(state = initialState, action: RecipesActions.RecipesActions) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      }
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case RecipesActions.UPDATE_RECIPE:
      const updatedRecipe = {
        // create copy of the old recipe
        ...state.recipes[action.payload.index],
        // extract all properties from the new recipe and merge into the copy of the old recipe
        // //overwrite old values with the updated values
        ...action.payload.newRecipe
      };
      // copy the old recipes array
      const updatedRecipes = [...state.recipes];
      // update the affected index of the array with the updated recipe
      updatedRecipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: updatedRecipes
      }
    case RecipesActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== action.payload;
        })
      }
    default:
      return state;

  }
}
