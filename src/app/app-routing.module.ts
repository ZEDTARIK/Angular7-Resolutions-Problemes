import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumOperationsComponent } from './components/forum-operations/forum-operations.component';
import { ForumsComponent } from './components/forums/forums.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForumDetailsComponent } from './components/forum-details/forum-details.component';

const routes: Routes = [
  {
    path: 'forum', children: [
      { path: '', component: ForumsComponent },
      { path: 'operation', component: ForumOperationsComponent },
      { path: 'detail/:id', component: ForumDetailsComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
