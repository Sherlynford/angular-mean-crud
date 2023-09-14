import { Component , OnInit } from '@angular/core';
import {CrudService} from './../../service/crud.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements  OnInit{
  
   Games:any = [];

  constructor( private crudeService:CrudService) {}
  
  ngOnInit(): void {
    this.crudeService.GetGames().subscribe(res =>{
      console.log(res)
      this.Games = res;
    })
  }
  delete(id:any, i:any){
    console.log(id)
    if(window.confirm('Do you want to go ahead?')){
      this.crudeService.deleteGame(id).subscribe((res)=>{
        this.Games.splice(i,1);
      })
    }
  }

}
