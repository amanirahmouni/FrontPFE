import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public items = <any>[];
  private apiUrl = 'http://localhost:8081/addDemand';
  formdem!: FormGroup;

  constructor(
    private employeeservice :EmployeeService,
    private http: HttpClient,
    private formBuilder : FormBuilder,
    ) {}


  ngOnInit(): void {
    
    this.employeeservice
    this.formdem = this.formBuilder.group({
        id:[null],
        mat_Pers: ["", Validators.required],
        DATE_DEMANDE: ["", Validators.required],
        heure_Sortie: ["", Validators.required],
        heure_Retour: ["", Validators.required],  
        type_Demande: ["A"],
        text_Demande:[''],
                             });



    this.items = [
      { label: 'Home', url: '/', attributes: { title: 'Home' } },
      { label: 'Library', url: '/' },
      { label: 'Data', url: '/dashboard/' },
      { label: 'CoreUI', url: '/' }
    ];

    setTimeout(() => {
      this.items = [
        { label: 'CoreUI', url: '/' },
        { label: 'Data', url: '/dashboard/' },
        { label: 'Library', url: '/' },
        { label: 'Home', url: '/', attributes: { title: 'Home' } }
      ];
    }, 5000);
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
  getalldem(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
                }
                
}
