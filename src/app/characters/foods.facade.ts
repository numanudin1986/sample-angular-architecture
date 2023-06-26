import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { FoodsState } from './state/food.state';
import { foodApiService } from './api/food.service.api';
import { categories, category } from './models/food.model';

@Injectable()
export class CharactersFacade {

  constructor(
    private foodsState: FoodsState,
    private foodAPI: foodApiService
  ) { }

  loadCharacters() {
    return this.foodAPI.getAllCategories()
      .pipe(
        tap((data: categories) => {
          debugger
          this.foodsState.setCategories(data.categories);

        })
      );
  }

  getPagination() {
    return this.foodsState.getPagination()
      .pipe(distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)))
  }

  addFavoriteCharacter(character: category) {
    this.foodsState.addFavorite(character);
  }

  removeFavoriteCharacter(id: number) {
    this.foodsState.removeFavorite(id);
  }

  getFavoriteCharacters() {
    return this.foodsState.getFavorites();
  }

  getFavoriteCategory() {
    return this.foodsState.getFavorites();
  }
  getCharacters() {
    return this.getFavoriteCharacters().pipe(
      switchMap(favorites => this.foodsState.getCategories().pipe(
        map(result => result.map(char => ({
          ...char,
          selected: favorites.some(fav => fav.idCategory === char.idCategory)
        })))
      ))
    )

  }
}
