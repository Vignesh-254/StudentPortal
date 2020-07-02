import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AppDataService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  AddStudent = new FormGroup({
    name : new FormControl('',Validators.required),
    rollno : new FormControl('',Validators.required),
    class : new FormControl('',Validators.required),
    picture : new FormControl('',Validators.required),
  })
  new;
  constructor(public modalService : NgbModal,
    public appdata : AppDataService,
    private route : Router) { }
  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.AddStudent.value)
    this.appdata.newStudent(this.AddStudent.value)
    this.route.navigate([''])
  }

}
