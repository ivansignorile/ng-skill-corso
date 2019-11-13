import { UsersService } from './users.service';
import { AjaxService } from './ajax.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { VcardComponent } from './vcard/vcard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { BankinfoComponent } from './bankinfo/bankinfo.component';


const routes: Routes = [
    {
      path: '',
      component: UsersComponent
    },
    {
      path: 'profile/:email',
      component: ProfileComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    VcardComponent,
    AnagraficaComponent,
    BankinfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  entryComponents: [
    VcardComponent
  ],
  providers: [
    AjaxService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
