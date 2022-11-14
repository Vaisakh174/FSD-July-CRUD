import { Injectable } from '@angular/core';
import{HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

getstudentslist(){
return this.http.get("http://localhost:3000/api/studentslist");
}



getbyidstudentslist(id:any){
  return this.http.get(`http://localhost:3000/api/student/${id}`);
  }

poststudentslist(data:any){
  return this.http.post("http://localhost:3000/api/student",data);
  }

  
deletestudentslist(id:any){
  return this.http.delete(`http://localhost:3000/api/student/${id}`);
  }

  
updatestudentslist(data:any,id:any){
  return this.http.put('http://localhost:3000/api/student',{data,id});
  }



}
