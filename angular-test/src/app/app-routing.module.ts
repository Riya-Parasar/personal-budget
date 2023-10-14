import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarComponent } from './guitar/guitar.component';
import { DrumComponent } from './drum/drum.component';
import { BassComponent } from './bass/bass.component';

const routes: Routes = [

  {
    path: '',
    component: BassComponent,
    pathMatch: 'full'
  },
  {
    path: 'guitar',
    component: GuitarComponent
  },

  {
    path: 'drum',
    component: DrumComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
