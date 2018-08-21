import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router,Routes, RouterModule} from '@angular/router';
import { MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule,MatOptionModule,
         MatSelectModule,MatIconModule,MatButtonModule,MatCardModule,MatDividerModule,
         MatSnackBarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/time/list/list.component';
import { CreateComponent } from './components/time/create/create.component';
import { EditComponent } from './components/time/edit/edit.component';
import { TimeService} from './time.service';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path:  'edit/:id', component: EditComponent},
  {path: 'list', component: ListComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
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
    ReactiveFormsModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
