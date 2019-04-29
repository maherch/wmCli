import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAuditeurComponent} from './Components/list-auditeur/list-auditeur.component';
import {AddAuditeurComponent} from './Components/add-auditeur/add-auditeur.component';
import {ListMissionComponent} from './Components/list-mission/list-mission.component';
import {AddMissionComponent} from './Components/add-mission/add-mission.component';
import {ListCategorieComponent} from './Components/list-categorie/list-categorie.component';
import {AddCategorieComponent} from './Components/add-categorie/add-categorie.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [

  {path: 'auditeur', component: ListAuditeurComponent},
  {path:'addAuditeur',component:AddAuditeurComponent},
  {path:'missions',component:ListMissionComponent},
  {path:'login',component:LoginComponent},
  {path:'addMission',component:AddMissionComponent},
  {path:'categorie',component:ListCategorieComponent},
  {path:'addCategorie',component:AddCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
