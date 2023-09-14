import { Component,OnInit,NgZone } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CrudService} from './../../service/crud.service';
import{FormGroup,FormBuilder}from '@angular/forms';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  
  getId: any;
  updateForm:FormGroup;
  
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private activatedRoute:ActivatedRoute,
    private crudService:CrudService
  ){
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetGame(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name:res['name'],
        price:res['price'],
        description:res['description']
      })
    })
    this.updateForm = this.formBuilder.group({
      name:[''],
      price:[''],
      description:['']
    })

   }
  ngOnInit(): void{
    
  }

  onUpdate():any{
    this.crudService.updateGame(this.getId,this.updateForm.value).subscribe(() =>{
      console.log('Data Update success');
      this.ngZone.run(() => this.router.navigateByUrl('/game-list'))
    },(err) =>{
      console.log(err);
    })
  }

}
