import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { MatSnackBar } from '@angular/material';
import { UrlService } from 'src/app/services/url/url.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  isModalShown: boolean = false;
  _url: string;

  constructor(private pdfService: PdfService,
    private snackBar: MatSnackBar,
    private urlService: UrlService) { }

  ngOnInit() {

  }

  showModal(): void {
    this.isModalShown = true;
  }

  private hideModal(): void {
    this.isModalShown = false;
  }

  delete(): void {
    this.hideModal();
  }

  cancel(): void {
    this.hideModal();
  }

  captureScreen(): void {
    var data = document.getElementById('content');
    this.pdfService.captureScreen(data, 'products');
  }

  generateURL() {
    this.urlService.addUrl({ id: 6, name: "BLABLA" }).subscribe(data => {
      console.log(data);
      const json = data.json();
      const output = json[0];
      const url = json[1];
      console.log(url);
      if (output === "SOMETHING_WRONG") {
        this.openSnackBar('Something went wrong, URL not created.', null);
      } else {
        this.copyToClipboard(url);
        if (output === "ALREADY_EXISTS") {
          this.openSnackBar('URL already exists. Click copy to copy the URL to clipboard.', url);
        } else {
          this.openSnackBar('URL created. Click copy to copy the URL to clipboard.', url);
        }
      }
    });
  }

  private openSnackBar(message, url) {
    const snackBarRef = this.snackBar.open(message, 'COPY', {
      duration: 5000
    });

    snackBarRef.onAction().subscribe(() => {
      this.copyToClipboard(url);
    });
  }

  copyToClipboard(url): void {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
