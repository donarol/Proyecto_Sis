import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
const myModule=[
  MatButtonModule,
  MatInputModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports:[
    myModule
  ]
})
export class MaterialModule { }
