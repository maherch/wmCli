import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
