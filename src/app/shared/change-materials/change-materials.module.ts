import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [ReactiveFormsModule, MatGridListModule, MatIconModule],
})
export class ChangeMaterialsModule {}
