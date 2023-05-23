import { Component , OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,FormControl }from '@angular/forms'
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  empDetail !: FormGroup ;
  EmpObj :Employee = new Employee();
  EmpList : Employee[]=[];
  users:any []=[]

constructor( private empService: EmployeeService ){}
ngOnInit(): void {
  //this.getalluser();
  //this.getAllEmployee();
  this.getallpersonne();
  

  
  
}
addEmployee() {
  console.log(this.empDetail.value);
this.EmpObj.id=this.empDetail.value.id; 
this.EmpObj.nom=this.empDetail.value.nom; 
this.EmpObj.prénom=this.empDetail.value.prénom; 
this.EmpObj.email=this.empDetail.value.email; 
this.EmpObj.matricule=this.empDetail.value.matricule; 


this.empService.addEmployee(this.EmpObj).subscribe(res=>{
console.log(res);
},err=>{
  console.log(err);
  this.getAllEmployee();
});
}
getAllEmployee() {
  this.empService.getAllEmployee().subscribe(
    (data: any) => {
      this.EmpList = data;
    },
    (error) => {
      console.log(error);
    }
  );
}

editEmployee(emp :  Employee){
this.empDetail.controls['id'].setValue(emp.id);
this.empDetail.controls['nom'].setValue(emp.nom);
this.empDetail.controls['prénom'].setValue(emp.prénom);
this.empDetail.controls['email'].setValue(emp.email);
this.empDetail.controls['matricule'].setValue(emp.matricule);  

}
deleteEmployee(emp: Employee) {
  this.empService.deleteEmployee(emp).subscribe((res: any) => {
    console.log(res);
    alert('Employee sera supprimé');
    this.getAllEmployee();
  });
}



getalluser() {
  this.empService.getall().subscribe(
    (data: any) => {
      this.users   = data;
    },
    (error) => {
      console.log(error);
    }
  );
}
getallpersonne() {
  this.empService.getallpersonne().subscribe(
    (data: any) => {
      this.users   = data;

    },
    (error) => {
      console.log(error);
    }
  );
}
}
