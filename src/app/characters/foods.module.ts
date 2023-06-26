import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  foodsRoutingModule } from './foods-routing.module';
import { CatalogComponent } from './containers/catalog/catalog.component';
import { CharactersFacade } from './foods.facade';
import { FoodComponent } from './components/Food/food.component';
import { FoodsState } from './state/food.state';
import { FavoriteCharactersComponent } from './components/favorite-foods/favorite-food.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CatalogComponent,
    FoodComponent,
    FavoriteCharactersComponent
  ],
  providers: [
    CharactersFacade,
    FoodsState
  ],
  imports: [
    CommonModule,
    foodsRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
