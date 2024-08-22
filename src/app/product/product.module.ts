import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ProductModule { }
