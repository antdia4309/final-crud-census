import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusListComponent } from './components/census-list/census-list.component';
import { AddCensusComponent } from './components/add-census/add-census.component';
import { EditCensusComponent } from './components/edit-census/edit-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'census-list' },
  { path: 'census-list', component: CensusListComponent },
  { path: 'add-census', component: AddCensusComponent },
  { path: 'edit-census/:id', component: EditCensusComponent },
  { path: '', pathMatch: 'full', redirectTo: 'delete-census/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
