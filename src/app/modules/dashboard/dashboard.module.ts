import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { RecentPhotosComponent } from './components/recent-photos/recent-photos.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';



@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    RecentPhotosComponent,
    LatestPostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
