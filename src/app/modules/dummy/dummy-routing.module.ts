import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyBaseComponent } from './dummy-base/dummy-base.component';

const routes: Routes = [
  {path: '', component: DummyBaseComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyRoutingModule { }
