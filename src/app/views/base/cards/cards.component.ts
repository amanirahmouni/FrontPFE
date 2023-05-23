import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DemandeService} from 'src/app/demande.service'
import{ OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  implements OnInit {
   private apiUrl = 'http://localhost:8081/addDemand';
  myForm!: FormGroup;
 formdem!: FormGroup;

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  constructor(private sanitizer: DomSanitizer,
    private employeeservice :EmployeeService,
    private http: HttpClient,
    private formBuilder : FormBuilder,
    ) { }
    ngOnInit() {

    
  
      this.employeeservice
  
  
                         this.formdem = this.formBuilder.group({
                            id:[null],
                             mat_Pers: ["", Validators.required],
                             DATE_DEMANDE: ["", Validators.required],
                             conge_Temps_Debut: ["", Validators.required],
                             conge_Temps_Fin:["", Validators.required],
                             type_Demande: ["C"],
                             text_Demande:[''],
                                                  });
    }
    getalldem(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
    savedem(){
      this.employeeservice.saveone(this.formdem?.value).subscribe(
      (data: any) => {
      console.log(this.formdem.value);
      this.getalldem()
                      },
      (error) => {
      console.log(error);
                 });
                  }

}
