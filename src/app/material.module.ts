import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatList, MatListModule} from "@angular/material/list";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
   exports: [

     MatCardModule,
     MatListModule,
     MatInputModule,
     MatButtonModule,
     MatFormFieldModule
   ]
})
export class MaterialModule { }
