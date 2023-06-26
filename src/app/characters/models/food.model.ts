export interface categories {
    categories: category[]
};


export interface category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
  selected?: boolean;
};