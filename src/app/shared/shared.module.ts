import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [ RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: []
})
export class SharedModule { }
