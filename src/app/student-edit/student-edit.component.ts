import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppDataService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  edit;
  EditStudent = new FormGroup({
    name : new FormControl('',Validators.required),
    rollno : new FormControl('',Validators.required),
    dept : new FormControl('',Validators.required),
    url : new FormControl('',Validators.required),
  })
  value: any;
  constructor(public appdata : AppDataService,private route : Router) { }

  ngOnInit(): void {
    this.edit = this.appdata.getEditStudent()
    this.EditStudent.patchValue(this.edit)
  }
  onSubmit(){
    this.value = this.EditStudent.value
    this.value.id = this.edit.id
    this.appdata.editStudent(this.value)
    this.route.navigate([''])
  }
  onCancel(){
    this.route.navigate([''])
  }
}
