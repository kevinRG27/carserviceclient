import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerListComponent } from './owner-list/owner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    NavBarComponent,
    OwnerEditComponent,
    OwnerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
