import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private _url: string = "http://newcrfs310.310.axc.nl/php/urls/"
  constructor(private http: Http) {

  }

  addUrl(product: any): Observable<any> {
    const url = this.generateURL();
    return this.http.post(`${this._url}${UrlServiceActions.ADD_URL}`, { link: JSON.stringify({ id: product.id, name: product.name, url: "TESTTT" }) });
  }

  getAllURLs(): Observable<any> {
    return this.http.get(`${this._url}${UrlServiceActions.GET_ALL_URLS}`);
  }

  generateURL(): string {
    return "TEEEEEEST2";
  }
}

export enum UrlServiceActions {
  ADD_URL = "post_url.php",
  DELETE_URL = "delete_url.php",
  GET_ALL_URLS = "get_urls.php"
}
