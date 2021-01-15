import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TypeaheadModule  } from 'ngx-bootstrap/typeahead';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForumsComponent } from './components/forums/forums.component';
import { ForumSearchComponent } from './components/forum-search/forum-search.component';
import { ForumDetailsComponent } from './components/forum-details/forum-details.component';
import { ForumOperationsComponent } from './components/forum-operations/forum-operations.component';
import { environment } from 'src/environments/environment';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut : 3000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
