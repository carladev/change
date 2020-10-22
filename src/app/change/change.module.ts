import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './containers/change/change.component';
import { ChangeMaterialsModule } from '../shared/change-materials/change-materials.module';

@NgModule({
  declarations: [ChangeComponent],
  imports: [CommonModule, ChangeRoutingModule, ChangeMaterialsModule],
})
export class ChangeModule {}
