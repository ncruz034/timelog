import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Router,Routes, RouterModule} from '@angular/router';
import {AppRoutingModule } from './app-routing.module';
import { MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule,MatOptionModule,
         MatSelectModule,MatIconModule,MatButtonModule,MatCardModule,MatDividerModule,
         MatSnackBarModule} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

//import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/time/list/list.component';
import { CreateComponent } from './components/time/create/create.component';
import { EditComponent } from './components/time/edit/edit.component';

import { OrderListComponent } from './components/time/order/order-list.component';
import { OrderCreateComponent } from './components/order/create/order-create.component';
import { OrderEditComponent } from './components/order/edit/order-edit.component';

import { TimeService} from './services/time.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [TimeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
