import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FKMComponent} from './components/fkm/fkm.component';
import {DateComponent} from './components/date/date.component';
const routes: Routes = [

  {
    path:'home',component:HomeComponent
    
   
  },
  {
   
  path:'date',component:DateComponent,
  },
  {
     path:'fkm',component:FKMComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }