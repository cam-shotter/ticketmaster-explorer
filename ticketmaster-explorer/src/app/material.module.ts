import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
