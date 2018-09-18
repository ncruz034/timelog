import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Router,Routes, RouterModule} from '@angular/router';
import {AppRoutingModule } from './app-routing.module';
import { MatToolbarModule,MatTableModule,
         MatFormFieldModule,MatInputModule,MatOptionModule,
         MatSelectModule,MatIconModule,MatButtonModule,
         MatCardModule,MatDividerModule, MatSnackBarModule, MatNativeDateModule} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

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
    MatSidenavModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  providers: [TimeService,AuthService, AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
     multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
