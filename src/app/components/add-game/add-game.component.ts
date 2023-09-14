import { Component,OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import {CrudService} from './../../service/crud.service';
import{FormGroup,FormBuilder}from '@angular/forms';



@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements  OnInit{

  gameForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: CrudService
  ){
    this.gameForm = this.formBuilder.group({
      name:[''],
      price:[''],
      description:['']
    })
  }

  ngOnInit(): void {
    
  }
  // onSubmit():any{
  //   this.crudService.AddGame(this.gameForm.value)
  //   .subscribe(() => {
  //     console.log("Data Add Success");
  //     this.ngZone.run(() => this.router.navigateByUrl('/game-list'))
  //   },(err) =>{
  //     console.log(err);
  //   })
  // }

  onSubmit(): void {
    this.crudService.AddGame(this.gameForm.value)
      .subscribe({
        next: () => {
          console.log("Data Add Success");
          this.ngZone.run(() => this.router.navigateByUrl('/game-list'));
        },
        error: (error) => console.log(error)
      });
  }


}
