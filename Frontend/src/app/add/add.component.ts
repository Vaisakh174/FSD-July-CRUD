import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  studentform: any = new FormGroup({
    "name": new FormControl(""),
    "age": new FormControl("")
  });

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  onsubmit() {
    this.api.poststudentslist(this.studentform.value).subscribe(res => {
      if (res) {
        alert("data saved successfully")
     
      }
      console.log(res);
    })
    console.log(this.studentform.value);
   
  }
}
