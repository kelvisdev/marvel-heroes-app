import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroResolve } from './hero-detail/resolves/hero.resolve';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: HeroListComponent,
      },
      {
        path: 'details/:id',
        component: HeroDetailComponent,
        resolve: {
          hero: HeroResolve
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
