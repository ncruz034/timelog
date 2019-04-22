import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TimeListComponent } from './components/time/list/time-list.component';
import { TimeCreateComponent } from './components/time/create/time-create.component';
import { TimeEditComponent } from './components/time/edit/time-edit.component';

import { OrderListComponent } from './components/order/list/order-list.component';
import { OrderCreateComponent } from './components/order/create/order-create.component';
import { OrderEditComponent } from './components/order/edit/order-edit.component';
import { OrderDetailComponent } from './components/order/detail/order-detail.component';
import { ClientListComponent } from './components/clients/list/client-list.component';
import { ClientCreateComponent } from './components/clients/create/client-create.component';
import { ClientEditComponent } from './components/clients/edit/client-edit.component';

import { ProjectCreateComponent } from './components/project/create/project-create.component';
import { ProjectListComponent } from './components/project/list/project-list.component';
import { ProjectEditComponent } from './components/project/edit/project-edit.component';

import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashobard/dashboard/dashboard.component';
import { ClientsDashboardComponent } from './components/dashobard/clients-dashboard/clients-dashboard.component';
import { AssociatesDashboardComponent } from './components/dashobard/associates-dashboard/associates-dashboard.component';
import { AdminDashboardComponent } from './components/dashobard/admin-dashboard/admin-dashboard.component';
import { AccessComponent } from './components/access/access.component';
import { TreeFileCreatorComponent } from './components/applications/tree-file-creator/tree-file-creator.component';

const routes: Routes = [
  {path: 'create', component: TimeCreateComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'orders', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'orders/create', component: OrderCreateComponent},
  {path: 'orders/edit/:id', component: OrderEditComponent},
  {path: 'orders/detail/:id', component: OrderDetailComponent},
  {path: 'clients/create', component: ClientCreateComponent},
  {path: 'clients', component: ClientListComponent},
  {path: 'clients/edit/:id', component: ClientEditComponent},

  {path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard]},
  {path: 'projects/edit/:id', component: ProjectEditComponent},
  {path: 'projects/create', component: ProjectCreateComponent},

  {path: 'times', component: TimeListComponent, canActivate: [AuthGuard]},
  {path: 'times/edit/:id', component: TimeEditComponent},
  {path: 'times/create/:order_id/:projectName/:clientName/:orderNumber', component: TimeCreateComponent},
  {path: 'auth', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'clients-dashboard', component: ClientsDashboardComponent},
  {path: 'associates-dashboard', component: AssociatesDashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'access-code', component: AccessComponent },
  {path: 'home', component: HomeComponent},
  {path: 'tree-file-creator' , component: TreeFileCreatorComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
