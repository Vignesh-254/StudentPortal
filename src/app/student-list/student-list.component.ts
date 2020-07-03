import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rollno', 'department'];
  dataSource ;
  constructor(public appdata : AppDataService) { }

  ngOnInit(): void {
    this.appdata.items.subscribe(value =>{
      this.dataSource = value
    })
  }

}
