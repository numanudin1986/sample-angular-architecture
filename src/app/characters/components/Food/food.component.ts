import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { category } from '@characters/models/food.model';

@Component({
  selector: 'app-character',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {


  @Input() category: category;
  
  @Output() selectFavorite: EventEmitter<category> = new EventEmitter();
  @Output() unselectFavorite: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectfood() {
    this.selectFavorite.emit(this.category);
  }

  unselectfood() {
    this.unselectFavorite.emit(this.category.idCategory);
  }

}
