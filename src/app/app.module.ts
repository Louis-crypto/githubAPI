import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileRoutingModule } from './profile-routing-module';
import { NavComponent } from './nav/nav.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { SearchReposComponent } from './search-repos/search-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    RepositoriesComponent,
    NavComponent,
    ProfileDataComponent,
    SearchReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProfileRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
