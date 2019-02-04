import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isMobile: boolean;
  constructor(private responsiveService: ResponsiveService) {
    this.responsiveService.checkWidth();
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
        this.isMobile = isMobile;
    });
  }

  ngOnInit() {
      this.responsiveService.checkWidth();
  }
}
