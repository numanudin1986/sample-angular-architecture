import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categories } from '@characters/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class foodApiService {
  readonly API = `https://www.themealdb.com/api/json/v1/1`;

  constructor(
    private http: HttpClient
  ) {}

  getAllCategories(): Observable<categories> {
    return this.http.get<categories>(`${this.API}/categories.php`)
  }
}
