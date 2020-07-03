import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  grid = false;
  new = false;
  view: BehaviorSubject<boolean>;
  students= [
      {
        "name": "Vigneshwaran",
        "rollno": "16P254",
        "dept": "Computer Science",
        "url":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "id": 1
      },
      {
        "name": "Sahash Anand",
        "rollno" : "16P136",
        "dept": "Computer Science",
        "url":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "id": 2
      },
      {
        "name": "Guru Prasath",
        "rollno": "16P110 ",
        "dept": "Computer Science",
        "url":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "id": 3
      },{
        "name": "Vignesh",
        "rollno": "16P204",
        "dept": "Information Technology",
        "url":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "id": 1
      },{
        "name": "Vicky",
        "rollno": "16P253",
        "dept": "Information Technology ",
        "url":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "id": 1
      },{
        "name": "Vignesh P",
        "rollno": "16P200",
        "dept": "Information Technology",
        "url":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "id": 1
      },
    ]
  items:BehaviorSubject<any> = new BehaviorSubject(this.students);
  
  edit
  obj : BehaviorSubject<any> = new BehaviorSubject(' ')
  objObs = this.obj.asObservable()
  data:BehaviorSubject<any> = new BehaviorSubject(null)
  value = this.data.asObservable()
  constructor() {
    this.view  = new BehaviorSubject(this.grid)
   }
   viewChanges(value:boolean){
     this.view.next(value)
   }
   addChanges(){
       this.new = !this.new
   }
   getData(){
    this.items.next(this.students)
    
   }
   setValue(){
   }
   newStudent(value){
    this.students.push(value)
    this.items.next(this.students)
     console.log(this.students)
   }
   getRecipe(){
    
    return this.objObs
  }
   setRecipe(event){
     
      this.obj.next(event)
   }

  deleteStudent(value){
    let i;
    const val = this.students
    for (let index = 0; index < val.length; index++) {
      if(val[index].id == value.id){
        i = index +1;
      }
    }
    val.splice(i-1,1)
    console.log(val)
    this.items.next(val)

  }
  getEditStudent(){
    return this.edit
  }
  setEditStudent(event){
    console.log(event)
    this.edit = event
  }
  editStudent(result){
    console.log("result",result)
     const val = this.items.value
     console.log("items",val)
    let i;
    for (let index = 0; index < val.length; index++) {
      if(val[index].id == result.id){
           console.log(result.id,val[index].id)
            i = index +1;
      }
    }
    val.splice(i-1,1,result)
    this.items.next(val)
    
  }
}
