import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeComponent } from './containers/change/change.component';

const routes: Routes = [{ path: '', component: ChangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeRoutingModule {}
