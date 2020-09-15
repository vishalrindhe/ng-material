import { MatChipInput, MatChipList, MatChipsModule } from '@angular/material/chips';
import { MaterialDesignModule } from './material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider'; 


import {MatFormFieldModule, MatError, MatLabel} from '@angular/material/form-field'; 

import {MatInputModule} from '@angular/material/input'; 
import {FormsModule, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';


import {MatGridList, MatGridListModule} from '@angular/material/grid-list';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatChipsModule,
    MatGridListModule,
    MatGridListModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 }
