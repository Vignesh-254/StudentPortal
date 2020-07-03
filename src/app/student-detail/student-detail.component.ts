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
  constructor(private modalService: NgbModal,public appdata : AppDataService,public route : Router) { 

   }

  ngOnInit(): void {
  }
  deleteItem(value){
    this.appdata.deleteStudent(value)
    this.route.navigate([''])
  }
  editItem(value){
    this.appdata.setEditStudent(value)
    this.route.navigate(['student-edit'])
  }
  onCancel(){
    this.route.navigate([''])
  }
}
