import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: ProfileComponent},
  {path: 'users/:username', component: ProfileDataComponent},
  {path:'repos',component:SearchReposComponent},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
