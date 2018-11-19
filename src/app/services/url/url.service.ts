import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private _url: string = "http://newcrfs310.310.axc.nl/php/urls/"
  constructor(private http: Http) {

  }

  addUrl(product: any): Observable<any> {
    const url = this.generateURL();
    return this.http.post(`${this._url}${UrlServiceActions.ADD_URL}`, { link: JSON.stringify({ id: product.id, name: product.name, url: url }) });
  }

  getAllURLs(): Observable<any> {
    return this.http.get(`${this._url}${UrlServiceActions.GET_ALL_URLS}`);
  }

  checkUrl(id: number, url: string): Observable<any> {
    return this.http.post(`${this._url}${UrlServiceActions.CHECK_URL}`, { link: JSON.stringify({ id: id, url: url }) });
  }

  deleteUrl(productid: number): Observable<any> {
    return this.http.post(`${this._url}${UrlServiceActions.DELETE_URL}`, { id: productid });
  }

  private generateURL(): string {
    let shuffled = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    shuffled = shuffled.replace(/\\/g, '').replace(/\//g, '');
    return shuffled;
  }
}

export enum UrlServiceActions {
  ADD_URL = "post_url.php",
  DELETE_URL = "delete_url.php",
  GET_ALL_URLS = "get_urls.php",
  CHECK_URL = "check_url.php"
}
