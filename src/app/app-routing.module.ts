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
import {EspaceTravailComponent} from './Components/espace-travail/espace-travail.component';
import {RealiserMissionComponent} from './Components/realiser-mission/realiser-mission.component';
import {QuestionnaireListComponent} from './Components/questionnaire-list/questionnaire-list.component';

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
    path:'espace',
  component:EspaceTravailComponent
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
    path: 'admin',
    component: AdminComponent
  },


  {path:'addMission',component:AddMissionComponent},
  {path:'realisation/questionnaire',component:QuestionnaireListComponent},

  {path:'home/categorie',component:ListCategorieComponent},
  {path:'addCategorie',component:AddCategorieComponent},

  {
    path: 'signup',
    component: RegisterComponent
  },

  {
    path: '',
    redirectTo: 'espace',
    pathMatch: 'full'
  },

  {
    path:'realisation',
    component: RealiserMissionComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
