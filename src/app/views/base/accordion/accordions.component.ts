import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DemandeService } from 'src/app/demande.service'
import { OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  providers: [DemandeService]
})
export class AccordionsComponent implements OnInit {
  private apiUrl = 'http://localhost:8081/libredeman/addDemand';
  myForm!: FormGroup;
  formdem!: FormGroup;
  items = [1, 2, 3, 4];
  users: any[] = [];
  Listavance: any[] = [];
  listGroupe: any[] = [];
  listTypePret: any[] = [];


  constructor(
    private sanitizer: DomSanitizer,
    private employeeservice: EmployeeService,
    private http: HttpClient,
    private formBuilder: FormBuilder,


  ) { }

  ngOnInit() {



    this.employeeservice


    this.formdem = this.formBuilder.group({
      id: [null],
      mat_Pers: ["", Validators.required],
      DATE_DEMANDE: ["", Validators.required],
      montant_Demande: ["", Validators.required],
      type_Demande: ["P"],
      text_Demande: [''],
    });
  }


  getdata(event: any) {
    const newData = event.target.value;
    console.log('Données nouvellement entrées :', newData);
  }

  getAccordionBodyText(value: string) {
    const textSample = `
      <strong>This is the <mark>#${value}</mark> item accordion body.</strong>.
    `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }
  getalldem(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  savedem() {
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
