import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CharactersFacade } from '@characters/foods.facade';
import { CHARACTERS_ROUTES } from '@characters/enums/routes'
import { category } from '@characters/models/food.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public categories$: Observable<category[]>;

  public favoriteCharacters$: Observable<category[]>;
  public pagination$: Observable<Pagination>;
  public currentPage: number = 1;
  public CONTAINER_ROUTE: string = '/' + CHARACTERS_ROUTES.HOME;

  constructor(
    private catalogFacade: CharactersFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((params: any) =>
          iif(() => params.page, of(params.page), of(1))
        )
      ).subscribe((page: number) => this.loadCharacters())

    this.pagination$ = this.catalogFacade.getPagination();

    this.categories$ = this.catalogFacade.getCharacters();


    this.favoriteCharacters$ = this.catalogFacade.getFavoriteCharacters();
  }

  updatePage(page: number) {
    this.router.navigate([this.CONTAINER_ROUTE], { queryParams: { page } });
  }

  loadCharacters() {
    this.catalogFacade.loadCharacters().subscribe();
  }

  addFavoriteCharacter(char: category) {
    this.catalogFacade.addFavoriteCharacter(char);
  }

  removeFavoriteCharacter(id: number) {
    this.catalogFacade.removeFavoriteCharacter(id);
  }

}
