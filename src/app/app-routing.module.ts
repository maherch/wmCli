import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ListAuditeurComponent} from './Components/list-auditeur/list-auditeur.component';
import {AddAuditeurComponent} from './Components/add-auditeur/add-auditeur.component';

const routes: Routes = [

  {path: 'auditeur', component: ListAuditeurComponent},
  {path:'addAuditeur',component:AddAuditeurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
