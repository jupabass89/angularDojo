import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: 'jokes',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
