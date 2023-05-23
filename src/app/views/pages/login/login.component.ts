import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DemandeService} from 'src/app/demande.service'
import{ OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from 'rxjs';
import{ AuthinterceptorService} from 'src/app/helpers/authinterceptor.service';

import { TokenStorageService } from 'src/app/helpers/token-storage.service';
import { AuthServiceService } from 'src/app/helpers/auth-service.service'

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private apiUrl = 'http://localhost:8081/';
  data:any []=[];
  formdem!: FormGroup;
  formLogin: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  

  constructor(private authiService: AuthinterceptorService, 
              private tokenStorage: TokenStorageService,
              private authservice:AuthServiceService,
              private route: Router,
              private formBuilder : FormBuilder)
              {  }
  
  
  
  
  
  
              ngOnInit(): void {
                
                this.authservice
                this.formLogin = this.formBuilder.group({
                //  id:[null],
                  matricule: ["", Validators.required],
                  password: ["", Validators.required],
                  
                   });


    // throw new Error('Method not implemented.');
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
      
    // }

    
  }
    onSubmit(): void {
    // const { matricule, password } = this.formLogin;

    // console.log("credentials ",matricule,password);
    console.log(this.formLogin.value)
    
    this.authservice.login(this.formLogin.value).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log("dataa",data);
       // this.route.navigate(['/home'])
       // localStorage.setItem("us",username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       // console.log("roleee"+this.roles[0])
        if (this.tokenStorage.getUser().role=="Personnel"){
          this.route.navigate(['/base/pagination'])
        }
        if (this.tokenStorage.getUser().role=="admin"){
          this.route.navigate(['/home'])
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
