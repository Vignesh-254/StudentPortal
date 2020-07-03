import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  
  {
    path:'',
    component:MainComponent,
    children: [
    {
        path: '',    
        component: StudentComponent,
    },
    {
      path:'student-detail',
      component:StudentDetailComponent
    },
    {
      path:'addStudent',
      component:NewStudentComponent
    },
    {
      path:'student-edit',
      component:StudentEditComponent
    },
    {
      path:'students-list',
      component : StudentListComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
