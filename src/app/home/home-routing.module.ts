import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LiveTrackerComponent } from './live-tracker/live-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {path:'',component:LiveTrackerComponent},
      {path:'livetracker',component:LiveTrackerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
