import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'add-game'} ,
  {path: 'game-list', component:GameListComponent } ,
  {path: 'add-game',component:AddGameComponent} ,
  {path: 'edit-game/:id',component:GameDetailComponent} ,
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
