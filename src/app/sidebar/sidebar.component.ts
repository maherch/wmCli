import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MediaMatcher} from '@angular/cdk/layout';
import {TokenStorageService} from '../auth/token-storage.service';
// import { MenusService } from './menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  info: any;
  constructor(private token: TokenStorageService) {
   }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
