import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { Router,Routes, RouterModule} from '@angular/router';
import {AppRoutingModule } from './app-routing.module';

//import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TimeListComponent } from './components/time/list/time-list.component';
import { TimeCreateComponent } from './components/time/create/time-create.component';
import { TimeEditComponent } from './components/time/edit/time-edit.component';

import { OrderListComponent } from './components/order/list/order-list.component';
import { OrderCreateComponent } from './components/order/create/order-create.component';
import { OrderEditComponent } from './components/order/edit/order-edit.component';


import { ClientListComponent } from './components/clients/list/client-list.component';
import { ClientCreateComponent } from './components/clients/create/client-create.component';
import { ClientEditComponent } from './components/clients/edit/client-edit.component';

import { TimeService} from './services/time.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { MomentModule } from 'ngx-moment';
import { UserCreateComponent } from './components/users/create/user-create.component';
import { UserListComponent } from './components/users/list/user-list.component';
import { UserEditComponent } from './components/users/edit/user-edit.component';
import { DashboardComponent } from './components/dashobard/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/dashobard/admin-dashboard/admin-dashboard.component';
import { AssociatesDashboardComponent } from './components/dashobard/associates-dashboard/associates-dashboard.component';
import { ClientsDashboardComponent } from './components/dashobard/clients-dashboard/clients-dashboard.component';
import { ServiceCreateComponent } from './components/service-request/create/service-create.component';
import { AccessComponent } from './components/access/access.component';
import { TreeFileCreatorComponent } from './components/applications/tree-file-creator/tree-file-creator.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { OrderDetailComponent } from './components/order/detail/order-detail.component';
import { ZippyComponent } from './common/zippy/zippy.component';
import { ProjectCreateComponent } from './components/project/create/project-create.component';
import { ProjectListComponent } from './components/project/list/project-list.component';
import { ProjectEditComponent } from './components/project/edit/project-edit.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimeListComponent,
    TimeCreateComponent,
    TimeEditComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ToolbarComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderEditComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientCreateComponent,
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AssociatesDashboardComponent,
    ClientsDashboardComponent,
    ServiceCreateComponent,
    AccessComponent,
    TreeFileCreatorComponent,
    DragAndDropDirective,
    OrderDetailComponent,
    ZippyComponent,
    ProjectCreateComponent,
    ProjectListComponent,
    ProjectEditComponent,
    FilterPipe,

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MomentModule,
  ],
  providers: [TimeService, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
     multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
