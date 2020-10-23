import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
})
export class ChangeMaterialsModule {}
