import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAuditeurComponent} from './Components/list-auditeur/list-auditeur.component';
import {AddAuditeurComponent} from './Components/add-auditeur/add-auditeur.component';
import {ListMissionComponent} from './Components/list-mission/list-mission.component';
import {AddMissionComponent} from './Components/add-mission/add-mission.component';
import {ListCategorieComponent} from './Components/list-categorie/list-categorie.component';
import {AddCategorieComponent} from './Components/add-categorie/add-categorie.component';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {UserComponent} from './Components/user/user.component';
import {PmComponent} from './Components/pm/pm.component';
import {RegisterComponent} from './Components/register/register.component';
import {AdminComponent} from './Components/admin/admin.component';
import {ListClientComponent} from './Components/list-client/list-client.component';
import {AddTacheComponent} from './Components/add-tache/add-tache.component';
import {ListeTacheComponent} from './Components/liste-tache/liste-tache.component';
import {ListControlComponent} from './Components/list-control/list-control.component';

const routes: Routes = [

  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {path: 'auditeur', component: ListAuditeurComponent},
  {path: 'home/auditeur', component: ListAuditeurComponent},
  {path:'addAuditeur',component:AddAuditeurComponent},
  {path:'missions',component:ListMissionComponent},
  {
    path: 'auth/login',
    component: LoginComponent
  },

  {
    path: 'client',
    component: ListClientComponent
  },

  {
    path: 'categorie',
    component: ListCategorieComponent
  },

  {
    path: 'tache',
    component: ListeTacheComponent
  },
  {
    path: 'control',
    component: ListControlComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },


  {path:'addMission',component:AddMissionComponent},
  {path:'home/categorie',component:ListCategorieComponent},
  {path:'addCategorie',component:AddCategorieComponent},
  {
    path: 'signup',
    component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
