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
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';

import { HttpClientModule} from '@angular/common/http';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { DeleteCategorieComponent } from './components/delete-categorie/delete-categorie.component';
import { DetailCategorieComponent } from './components/detail-categorie/detail-categorie.component';
import { UpdateCategorieComponent } from './components/update-categorie/update-categorie.component';
import {FormsModule} from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    DeleteCategorieComponent,
    DetailCategorieComponent,
    UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    FormsModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
