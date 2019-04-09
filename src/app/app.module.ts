import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoginComponent } from './login/login.component';
import { ListAuditeurComponent } from './Components/list-auditeur/list-auditeur.component';
import {HttpClientModule} from '@angular/common/http';
import { AddAuditeurComponent } from './Components/add-auditeur/add-auditeur.component';
import { DetailAuditeurComponent } from './Components/detail-auditeur/detail-auditeur.component';
import { UpdateAuditeurComponent } from './Components/update-auditeur/update-auditeur.component';
import { FormsModule } from '@angular/forms';
import { ListMissionComponent } from './Components/list-mission/list-mission.component';
import { AddMissionComponent } from './Components/add-mission/add-mission.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ListAuditeurComponent,
    AddAuditeurComponent,
    DetailAuditeurComponent,
    UpdateAuditeurComponent,
    ListMissionComponent,
    AddMissionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
