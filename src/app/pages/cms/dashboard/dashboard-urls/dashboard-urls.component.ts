import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UrlService } from 'src/app/services/url/url.service';

@Component({
  selector: 'app-dashboard-urls',
  templateUrl: './dashboard-urls.component.html',
  styleUrls: ['./dashboard-urls.component.scss']
})
export class DashboardUrlsComponent implements OnInit {

  isModalShown: boolean = false;
  urls: [];
  urlToDelete: any;

  constructor(private snackBar: MatSnackBar,
    private urlService: UrlService) { }

  ngOnInit() {
    this.getAllUrls();
  }

  getAllUrls(): void {
    this.urlService.getAllURLs().subscribe(data => {
      this.urls = data.json();
    });
  }

  showModal(url: any): void {
    this.urlToDelete = url;
    this.isModalShown = true;
  }

  private hideModal(): void {
    this.isModalShown = false;
  }

  delete(): void {
    this.urlToDelete = null;
    this.hideModal();
  }

  cancel(): void {
    this.hideModal();
  }

  copyURL(url: string): void {
    if (url) {
      this.copyToClipboard(url);
      this.openSnackBar('URL copied to clipboard.');
    }
  }

  private openSnackBar(message) {
    const snackBarRef = this.snackBar.open(message, 'OK', {
      duration: 2500
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
