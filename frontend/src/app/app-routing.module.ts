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

import { ClientListComponent } from './components/clients/list/client-list.component';
import { ClientCreateComponent } from './components/clients/create/client-create.component';
import { ClientEditComponent } from './components/clients/edit/client-edit.component';

const routes: Routes =[
  {path: 'create', component: TimeCreateComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'orders/create', component: OrderCreateComponent},
  {path: 'orders/edit/:id', component: OrderEditComponent},
  {path: 'clients/create', component: ClientCreateComponent},
  {path: 'clients/edit', component: ClientEditComponent},
  {path: 'times', component: TimeListComponent},
  {path: 'times/edit/:id', component: TimeEditComponent},
  {path: 'auth', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
