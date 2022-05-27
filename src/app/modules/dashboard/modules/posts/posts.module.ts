import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostsTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
