import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FeedComponent } from './components/feed/feed.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  { path: "feed", component: FeedComponent },
  { path: "addpost", component: AddPostComponent },
  { path: "post/:id", component: SinglePostComponent },
  { path: "editprofile", component: EditProfileComponent },
  { path: "", pathMatch: "full", redirectTo: "feed" },
  { path: "**", redirectTo: "feed" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
