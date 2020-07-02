import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  view;
  value
  items;
  constructor(public router : Router,private appdata : AppDataService) { 
    this.appdata.view.subscribe(value=>{
      this.view = value;
    })
   }
  ngOnInit() {
    this.appdata.items.subscribe(value =>{
      this.items = value
    });
  }
  studentDescription(item){
    this.appdata.setRecipe(item);
    this.router.navigate(['student-detail'])
  }  

}
