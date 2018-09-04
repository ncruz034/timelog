import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/time/list/list.component';
import { CreateComponent } from './components/time/create/create.component';
import { EditComponent } from './components/time/edit/edit.component';

import { OrderListComponent } from './components/order/list/order-list.component';
import { OrderCreateComponent } from './components/order/create/order-create.component';
import { OrderEditComponent } from './components/order/edit/order-edit.component';
const routes: Routes =[
  {path: 'create', component: CreateComponent},
  {path:  'edit/:id', component: EditComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orders/create', component: OrderCreateComponent},
  {path: 'list', component: ListComponent},
  {path: 'auth', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
