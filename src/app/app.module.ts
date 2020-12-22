import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForumsComponent } from './components/forums/forums.component';
import { ForumSearchComponent } from './components/forum-search/forum-search.component';
import { ForumDetailsComponent } from './components/forum-details/forum-details.component';
import { ForumOperationsComponent } from './components/forum-operations/forum-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ForumsComponent,
    ForumSearchComponent,
    ForumDetailsComponent,
    ForumOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
