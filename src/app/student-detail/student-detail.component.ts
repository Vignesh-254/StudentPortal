import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppDataService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  value;
  edit;
  constructor(private modalService: NgbModal,public appdata : AppDataService,public router : Router) { 
    // this.appdata.data.subscribe(data => {
    //   this.items = data
    // })
    // this.appdata.getRecipe().subscribe(value => {
    //   this.value = value
    //   console.log(this.value)
    // })
   }

  ngOnInit(): void {
     this.edit = this.appdata.value
    // console.log(this.value)
    // this.activatedRoute.params.subscribe(
    //   params => { this.name = (params['name'])}
    //   )
    // console.log(this.name)
    // for(let i of this.items){
    //   console.log(i.name);
    //   if(i.name == this.name){
    //     this.value = i;
    //   }
    // }
    // console.log(this.value);
  }
  // editRecipe(event){
  //   // console.log(event)
  //   // this.edit = event;
  //   // console.log(this.edit)
  //   this.appdata.setEditRecipe(event)
  //   this.modalService.open(RecipeEditComponent,{ size: 'lg' })
  //   // this.router.navigate(['recipe-edit'])
  // }
  deleteItem(value){
    this.appdata.deleteStudent(value)
    this.router.navigate([''])
  }

}
