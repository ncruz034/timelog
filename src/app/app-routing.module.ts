import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TimeListComponent } from './components/time/list/time-list.component';
import { TimeCreateComponent } from './components/time/create/time-create.component';
import { TimeEditComponent } from './components/time/edit/time-edit.component';
import { TimeWeeklyComponent } from './components/time/time-weekly/time-weekly.component';
import {TimePerOrderComponent } from './components/time/time-per-order/time-per-order.component';

import { OrderListComponent } from './components/order/list/order-list.component';
import { OrderCreateComponent } from './components/order/create/order-create.component';
import { OrderEditComponent } from './components/order/edit/order-edit.component';
import { OrderDetailComponent } from './components/order/detail/order-detail.component';
import { ClientListComponent } from './components/clients/list/client-list.component';
import { ClientCreateComponent } from './components/clients/create/client-create.component';
import { ClientEditComponent } from './components/clients/edit/client-edit.component';
import { ClientDetailComponent } from './components/clients/detail/client-detail.component';

import { ProjectCreateComponent } from './components/project/create/project-create.component';
import { ProjectListComponent } from './components/project/list/project-list.component';
import { ProjectEditComponent } from './components/project/edit/project-edit.component';
import { ProjectDetailComponent } from './components/project/detail/project-detail.component';

import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashobard/dashboard/dashboard.component';
import { ClientsDashboardComponent } from './components/dashobard/clients-dashboard/clients-dashboard.component';
import { AssociatesDashboardComponent } from './components/dashobard/associates-dashboard/associates-dashboard.component';
import { AdminDashboardComponent } from './components/dashobard/admin-dashboard/admin-dashboard.component';
import { AccessComponent } from './components/access/access.component';
import { TreeFileCreatorComponent } from './components/applications/tree-file-creator/tree-file-creator.component';
import { BillingListComponent } from './components/billing/list/billing-list.component';

const routes: Routes = [
  {path: 'create', component: TimeCreateComponent, canActivate: [AuthGuard]},
  {path: 'users/register', component: RegisterComponent},
  {path: 'orders', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'orders/create/:order_id/:projectName/:clientName', component: OrderCreateComponent, canActivate: [AuthGuard]},
  {path: 'orders/create', component: OrderCreateComponent, canActivate: [AuthGuard]},
  {path: 'orders/edit/:id', component: OrderEditComponent, canActivate: [AuthGuard]},
  {path: 'orders/detail/:id', component: OrderDetailComponent, canActivate: [AuthGuard]},
  {path: 'clients/create', component: ClientCreateComponent, canActivate: [AuthGuard]},
  {path: 'clients', component: ClientListComponent, canActivate: [AuthGuard]},
  {path: 'clients/edit/:id', component: ClientEditComponent, canActivate: [AuthGuard]},
  {path: 'clients/detail/:id', component: ClientDetailComponent, canActivate: [AuthGuard]},

  {path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard]},
  {path: 'projects/edit/:id', component: ProjectEditComponent, canActivate: [AuthGuard]},
  {path: 'projects/create/:client_id/:clientName', component: ProjectCreateComponent, canActivate: [AuthGuard]},
  {path: 'projects/detail/:id', component: ProjectDetailComponent, canActivate: [AuthGuard]},

  {path: 'times', component: TimeListComponent, canActivate: [AuthGuard]},
  {path: 'times/edit/:id', component: TimeEditComponent, canActivate: [AuthGuard]},
  {path: 'times/time-per-order', component: TimePerOrderComponent, canActivate: [AuthGuard]},
  {path: 'times/create/:order_id/:projectName/:clientName/:orderNumber', component: TimeCreateComponent, canActivate: [AuthGuard]},
  {path: 'times/weekly', component: TimeWeeklyComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'clients-dashboard', component: ClientsDashboardComponent, canActivate: [AuthGuard]},
  {path: 'associates-dashboard', component: AssociatesDashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'access-code', component: AccessComponent, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent},
  {path: 'tree-file-creator' , component: TreeFileCreatorComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'billing', component: BillingListComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
