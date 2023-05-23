import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    
    
  },
  {
    path: '',
    data: {
      title: 'calendrier'
    },
    
    
  }
    ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
