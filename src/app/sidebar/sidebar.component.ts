import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MediaMatcher} from '@angular/cdk/layout';
// import { MenusService } from './menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
