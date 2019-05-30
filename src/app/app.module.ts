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
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AddAuditeurComponent } from './Components/add-auditeur/add-auditeur.component';
import { DetailAuditeurComponent } from './Components/detail-auditeur/detail-auditeur.component';
import { UpdateAuditeurComponent } from './Components/update-auditeur/update-auditeur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListMissionComponent } from './Components/list-mission/list-mission.component';
import {DemoMaterialModule} from './materiel-module';
import {MatNativeDateModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddCategorieComponent } from './Components/add-categorie/add-categorie.component';

import { ListCategorieComponent } from './Components/list-categorie/list-categorie.component';
import { DeleteCategorieComponent } from './Components/delete-categorie/delete-categorie.component';
import { DetailCategorieComponent } from './Components/detail-categorie/detail-categorie.component';
import { UpdateCategorieComponent } from './Components/update-categorie/update-categorie.component';




import { AddMissionComponent } from './Components/add-mission/add-mission.component';
import { UpdateMissionComponent } from './Components/update-mission/update-mission.component';
import { DetailMissionComponent } from './Components/detail-mission/detail-mission.component';
import { UserComponent } from './Components/user/user.component';
import { PmComponent } from './Components/pm/pm.component';
import {RegisterComponent} from './Components/register/register.component';
import { AdminComponent } from './Components/admin/admin.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { ListClientComponent } from './Components/list-client/list-client.component';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { AddTacheComponent } from './Components/add-tache/add-tache.component';
import { ListeTacheComponent } from './Components/liste-tache/liste-tache.component';
import { UpdateTacheComponent } from './Components/update-tache/update-tache.component';
import { DetailTacheComponent } from './Components/detail-tache/detail-tache.component';
import { DeleteTacheComponent } from './Components/delete-tache/delete-tache.component';
import { AddControlComponent } from './Components/add-control/add-control.component';
import { ListControlComponent } from './Components/list-control/list-control.component';
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
    AddCategorieComponent,
    ListCategorieComponent,
    DeleteCategorieComponent,
    DetailCategorieComponent,
    UpdateCategorieComponent,
    UpdateMissionComponent,
    DetailMissionComponent,
    UserComponent,
    PmComponent,
    RegisterComponent,
    AdminComponent,
    ListClientComponent,
    AddClientComponent,
    AddTacheComponent,
    ListeTacheComponent,
    UpdateTacheComponent,
    DetailTacheComponent,
    DeleteTacheComponent,
    AddControlComponent,
    ListControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    DemoMaterialModule,
    NgbModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
  ],

 providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
