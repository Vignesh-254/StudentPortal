import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http : HttpClient) { }

  saveUser(user){
    return this.http.post('http://localhost:8080/api/SaveUser/',user).pipe(
        map((response : Response) =>response.json()))
  }

  GetUser(){
    return this.http.get('http://localhost:8080/api/getUser/').
      pipe(map((response : Response)=> response.json()))
  }
  deleteuser(id){
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id':id})
      .pipe(map((response : Response)=> response.json()))
  }
}
