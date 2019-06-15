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
import {ListeTacheComponent} from './Components/liste-tache/liste-tache.component';
import {ListControlComponent} from './Components/list-control/list-control.component';
import {NcComponent} from './Components/nc/nc.component';
import {SuggestionComponent} from './Components/suggestion/suggestion.component';
import {AuditComponent} from './Components/audit/audit.component';

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
    path:'audit/:id',
    component:AuditComponent
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
    path:'realisation',
    component: RealiserMissionComponent
  },

  {
    path:'nc',
    component: NcComponent
  },

  {
    path: 'tache',
    component: ListeTacheComponent,
  },
  {
    path: 'control',
    component: ListControlComponent
  },

  {path:'suggestion',component:SuggestionComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
