import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app.service';
import { NgbModal, NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewStudentComponent } from '../new-student/new-student.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  grid ;
  open  = false;
  constructor(private appdata : AppDataService,
    private modalService : NgbModal,private route : Router) { }
  AddStudent = new FormGroup({
    name : new FormControl(''),
    rollno : new FormControl(''),
    class : new FormControl(''),
    picture : new FormControl(''),
  })
  ngOnInit(): void {
  }
  viewChanges(){
    this.appdata.view.subscribe(value =>{
      this.grid = value
    })
    this.appdata.viewChanges(!this.grid)
  }
  addNewStudent(){
    this.route.navigate(['addStudent'])
  }
  onSubmit(){
    console.log(this.AddStudent.value)

  }
  displayList(){
    this.route.navigate(['students-list']);
  }
}
