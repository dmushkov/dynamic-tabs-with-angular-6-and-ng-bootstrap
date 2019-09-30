import { Component, OnInit } from '@angular/core';
import {TabService} from '../tab.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  tabs = [];
  private activeTabUrl: string;
  constructor(private tabService: TabService, private router: Router) {}

  ngOnInit() {
    this.tabs = this.tabService.tabs;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.activeTabUrl = event.urlAfterRedirects;
      if (this.tabs.length === 0) {
        this.tabService.addTab(this.activeTabUrl);
      }
    }
  });
  }

  closeTab(index: number, event: Event) {
    this.tabService.deleteTab(index);
    event.preventDefault();
  }

  onTabChange(event) {
    this.router.navigateByUrl(event.nextId);
  }
}
