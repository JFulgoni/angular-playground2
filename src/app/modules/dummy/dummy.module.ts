import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyBaseComponent } from './dummy-base/dummy-base.component';


@NgModule({
  declarations: [
    DummyBaseComponent
  ],
  imports: [
    CommonModule,
    DummyRoutingModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class DummyModule { }
