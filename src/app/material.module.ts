import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatList, MatListModule} from "@angular/material/list";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from "@angular/material/chips";



@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatChipsModule
  ],
   exports: [
     MatCardModule,
     MatListModule,
     MatInputModule,
     MatButtonModule,
     MatFormFieldModule,
     MatIconModule,
     MatListModule,
     MatTableModule,
     MatToolbarModule,
     MatDialogModule,
     MatChipsModule
   ]
})
export class MaterialModule { }
