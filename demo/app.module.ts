import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RlTagInputModule } from '../lib/tag-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RlTagInputModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
