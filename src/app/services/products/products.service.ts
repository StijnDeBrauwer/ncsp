import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private _nextID: number;
  private _url: string = "http://newcrfs310.310.axc.nl/php/products/"
  constructor(private http: Http) {

  }

  getAllProducts(): Observable<any[]> {
    return this.http.get(`${this._url}${ProductServiceAction.GET_ALL}`)
      .pipe(map((data: Response) => data.json()));
  }

  addProduct(product: any): void {
    // TODO: set ID of product
    this.http.post(`${this._url}${ProductServiceAction.ADD_PRODUCT}`, { product: JSON.stringify(product) }).subscribe();
  }

  updateProduct(product: any): void {
    this.http.post(`${this._url}${ProductServiceAction.UPDATE_PRODUCT}`, { product: JSON.stringify(product) }).subscribe();
  }

  getProductById(id: number): Observable<any> {
    return this.http.post(`${this._url}${ProductServiceAction.GET_PRODUCT_BY_ID}`, { product: id })
      .pipe(map((data: Response) => data.json()));
  }

  setNextID(id: number): void {
    this._nextID = id;
  }
}

export enum ProductServiceAction {
  GET_ALL = "get_products.php",
  ADD_PRODUCT = "post_product.php",
  UPDATE_PRODUCT = "put_product.php",
  GET_PRODUCT_BY_ID = "get_byid_product.php"
}
