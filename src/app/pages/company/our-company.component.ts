import { Component, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AboutUsPage } from './about-us/about-us.page';
import { ContactPage } from './contact/contact.page';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-our-company',
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.scss']
})
export class OurCompanyComponent implements OnInit {

  @ViewChild('about', { read: ElementRef }) public about: ElementRef;
  @ViewChild('contact', { read: ElementRef }) public contact: ElementRef;

  constructor(private route: Router) {

  }
  ngOnInit() {


  }

  ngAfterViewInit(): void {
    this.scrollToElement(this.route.url);
  }



  public scrollToAbout(): void {
    this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
  public scrollToContact(): void {
      this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
  scrollToElement(child) {
    console.log(child);
    switch (child) {
      case "/company/about": {
        console.log(`scroll to about`);
        try {
          this.scrollToAbout()
        } catch (err) { }
        break;
      }
      case "/company/contact": {
        try {
          this.scrollToContact();
        } catch (err) { }
        break;
      }
    }
  }


}
