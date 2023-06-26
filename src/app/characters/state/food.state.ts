import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { categories, category } from '@characters/models/food.model';

@Injectable()
export class FoodsState {
  private favorites: BehaviorSubject<category[]> = new BehaviorSubject([]);
  private pagination: Subject<Pagination> = new Subject();

  //categories
  private categories: BehaviorSubject<category[]> = new BehaviorSubject([]);;

  constructor() {}

  setPagination(pagination: Pagination) {
    this.pagination.next(pagination);
  }

  getPagination() {
    return this.pagination.asObservable();
  }

  setCategories(categories: category[]) {
    this.categories.next(categories);
  }
  getCategories() {
   return this.categories.asObservable();
  }


  addFavorite(character: category) {
    const currentValue = this.favorites.getValue();
    this.favorites.next([...currentValue, character]);
  }

  removeFavorite(id: number) {
    const currentValue = this.favorites.getValue();
    this.favorites.next(currentValue.filter(char => char.idCategory !== id.toString()));
  }

  getFavorites() {
    return this.favorites.asObservable();
  }

}
