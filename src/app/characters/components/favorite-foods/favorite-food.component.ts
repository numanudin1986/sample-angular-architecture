import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { category } from '@characters/models/food.model';

enum Status {
  ALIVE = 'Alive',
  UNKNOWN = 'unknown',
  DEAD = 'Dead'
}

@Component({
  selector: 'app-favorite-characters',
  templateUrl: './favorite-food.component.html',
  styleUrls: ['./favorite-food.component.scss']
})
export class FavoriteCharactersComponent implements OnInit {
  @Input() favoriteCharacters: category[];
  @Output() removeFavorite: EventEmitter<string> = new EventEmitter();
  public STATUS = Status;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  remove(id: string) {
    this.removeFavorite.emit(id);
  }

}
