import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import{ FormGroup,FormBuilder,FormControl }from '@angular/forms'

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit  {
  empDetail !: FormGroup ;
  users:any []=[]

  
  
  constructor(
    private service:EmployeeService,
  ) { }
  ngOnInit(): void {

    this.getallpersonne();
   
   
  }
  getallpersonne() {
    this.service.getallpersonne().subscribe(
      (data: any) => {
        this.users   = data;
  
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getalluser() {
    this.service.getall().subscribe(
      (data: any) => {
        this.users   = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
