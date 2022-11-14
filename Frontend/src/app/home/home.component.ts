import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice: ApiService) { }
  students: any = [];
  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.apiservice.getstudentslist().subscribe(res => {
      this.students = res;
      console.log("incoming data", res);
    });
  }

  edit(data:any,id:any) {
    this.apiservice.updatestudentslist(data,id).subscribe(res => {
      this.students = res;
      this.getdata();
    })};

  deleted(id: any) {
    this.apiservice.deletestudentslist(id).subscribe(res => {
      this.students = res;
      this.getdata();
    })};
}
