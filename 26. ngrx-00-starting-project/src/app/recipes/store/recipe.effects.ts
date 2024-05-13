import { Actions, createEffect, ofType } from '@ngrx/effects'
import { HttpClient } from "@angular/common/http";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as RecipesActions from './recipe.actions';
import { Recipe } from "../recipe.model";
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() => this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://ng-course-recipe-book-40cfc-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        );
      }),
      map(recipes => {
        return recipes ? recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        }) : []
      }),
     map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
     })
    ),
    {dispatch: false}
  );

  storeRecipes = createEffect(() => this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://ng-course-recipe-book-40cfc-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipesState.recipes
      );
    }),
  ), {dispatch: false})

  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromApp.AppState>) {}
}
