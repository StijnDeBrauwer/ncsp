import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-generic-url',
  templateUrl: './generic-url.component.html',
  styleUrls: ['./generic-url.component.scss']
})
export class GenericUrlComponent implements OnInit {

  product: any;
  constructor(private urlService: UrlService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService) { }

  ngOnInit() {
    const url = this.route.snapshot.params["url"];
    const id = this.route.snapshot.params["id"];
    this.urlService.checkUrl(id, url).subscribe(data => {
      console.log(data);
      const isExistingUrl = data.json();
      if (!isExistingUrl) {
        this.router.navigate(['/404']);
      } else {
        this.productService.getProductById(id).subscribe(product => {
          if(!product.json()) {
            this.router.navigate(['/404']);
          } else {
            this.product = product.json();
          }
        })
      }
    })
  }

}
