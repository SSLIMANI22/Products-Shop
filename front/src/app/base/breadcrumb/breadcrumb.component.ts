import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavItem } from 'app/base/sidenav/sidenav.model';
import { SidenavService } from 'app/base/sidenav/sidenav.service';
import { SIDENAV_ITEMS } from 'app/base/sidenav/SIDENAV_ITEMS';
import { MenuItem } from 'primeng/api';
import { filter, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() public lang = 'en';
  public items: MenuItem[] = [];
  private readonly sidenavItems: SidenavItem[] = SIDENAV_ITEMS;
  private homeItem: MenuItem = { label: 'Home', routerLink: '/' };

  constructor(
    private readonly sidenavService: SidenavService,
    private readonly router: Router,
  ) {

  }

  ngOnInit(): void {
    this.router.events.pipe(      
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url),
      startWith(this.router.url),
      tap(() => this.items = [this.homeItem])
    ).subscribe((url) => {
      this.buildBreadcrumb(url);
    });
  }

  private buildBreadcrumb(path: string): void {
    this.items = [this.homeItem];

    const matchedItem = this.sidenavItems.find(item => '/' + item.link === path || path.startsWith('/' + item.link));
    if (matchedItem) {
      this.items.push({
        label: matchedItem.labels[this.lang],
        routerLink: '/' + matchedItem.link,
        command: () => this.sidenavService.setCurrentEntityName('')
      });

      const subPaths = path.replace('/' + matchedItem.link, '').split('/').filter(p => p);
      subPaths.reduce((accumulatedPath, subPath) => {
        accumulatedPath += '/' + subPath;
        const subItem = this.sidenavItems.find(item => '/' + item.link === accumulatedPath);
        if (subItem) {
          this.items.push({
            label: subItem.labels[this.lang],
            routerLink: '/' + subItem.link,
            command: () => this.sidenavService.setCurrentEntityName('')
          });
        }
        return accumulatedPath;
      }, '/' + matchedItem.link);
    }
  }

}