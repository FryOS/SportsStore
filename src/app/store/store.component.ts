import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectCategory = null;

  constructor(
    private repository: ProductRepository) { }

    ngOnInit() {
  }

  get products(): Product[] {
    return this.repository.getProducts(this.selectCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
  this.selectCategory = newCategory;
  }
}
