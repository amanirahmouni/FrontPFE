import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DemandeService} from 'src/app/demande.service'
import{ OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  private apiUrl = 'http://localhost:8081/api/auth/AddUser';
  formpers!:FormGroup ;
  users: any[] = [];
 

  constructor(    
    private formBuilder : FormBuilder,
    private service :EmployeeService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router,


    ) { 
    
      this.formpers = this.formBuilder.group({
        matricule: ["", Validators.required],
        email: ["", Validators.required],
        password: [""],
        firstName:["", Validators.required],
        lastName: ["", Validators.required],
        login: ["tes"],

         });
  }
  ngOnInit(): void {
    this.service

      
  }
  savepers(){
    console.log(this.formpers.value);

    this.service.saveonee(this.formpers.value).subscribe(
    (data: any) => {
    console.log(this.formpers.value);
    this.getalluser()
              },
    (error) => {
    console.log(error);
               });
                }
  getalluser(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
                }
signup() {
                  // Logique pour créer le compte
                
                  // Une fois le compte créé avec succès, naviguer vers la page de signin
this.router.navigate(['/login']);
                }

                             

}
