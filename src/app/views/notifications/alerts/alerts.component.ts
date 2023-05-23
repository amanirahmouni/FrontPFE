import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import{ FormGroup,FormBuilder,FormControl }from '@angular/forms'




@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  visible = [true, true];
  dismissible = true;
  empDetail !: FormGroup ;
  users:any []=[]


  constructor( 
    private service:EmployeeService,
    
  ) { }

  ngOnInit(): void {

    this.getallpersonne();
   
   
  }

  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
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
  














