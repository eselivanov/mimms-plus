import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  showBackButton = false
  currentURL = ""
  constructor(private router: Router, public titleService: Title) { 
    /*router.events.subscribe(e => {
        if (e instan)
        console.log(e.url);
      
    });*/
    router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      console.log(e.url);
      this.currentURL = e.url
      if (this.currentURL !== "/clinics"){
        if (this.currentURL !== "/" && this.currentURL !== ""){
          this.showBackButton = true
        }else{
          this.showBackButton = false
        }
      }else{
        this.showBackButton = false
      }
    });
  }

  ngOnInit() {
  }

  goBack = () => {
    this.router.navigate(['/clinics']);
  }

}
