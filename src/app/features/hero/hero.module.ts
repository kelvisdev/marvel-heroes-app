import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CardFilterComponent } from './hero-list/components/card-filter/card-filter.component';
import { HeroTableComponent } from './hero-list/components/hero-table/hero-table.component';
import { HeroTableHeaderComponent } from './hero-list/components/hero-table/hero-table-header/hero-table-header.component';
import { HeroTableBodyComponent } from './hero-list/components/hero-table/hero-table-body/hero-table-body.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroResolve } from './hero-detail/resolves/hero.resolve';


@NgModule({
  declarations: [
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent,
    CardFilterComponent,
    HeroTableComponent,
    HeroTableHeaderComponent,
    HeroTableBodyComponent
  ],
  exports: [
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent,
    CardFilterComponent,
    HeroTableComponent,
    HeroTableHeaderComponent,
    HeroTableBodyComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    HeroResolve
  ]
})
export class HeroModule { }
