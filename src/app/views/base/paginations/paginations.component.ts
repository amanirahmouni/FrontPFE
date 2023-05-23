import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/helpers/token-storage.service';


@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.scss']
})

export class PaginationsComponent implements OnInit {
  @ViewChild('nomInput') nomInput: any;
  @ViewChild('prenomInput') prenomInput: any;
  @ViewChild('sexeInput') sexeInput: any;
  @ViewChild('cinInput') cinInput: any;
  @ViewChild('dateNaissanceInput') dateNaissanceInput: any;
  @ViewChild('lieuNaissanceInput') lieuNaissanceInput: any;
  @ViewChild('matriculeInput') matriculeInput: any;
  @ViewChild('dateEntreeInput')  dateEntreeInput: any;
  @ViewChild('posteTravailInput') posteTravailInput: any;
  @ViewChild('dateTitularisation') dateTitularisation: any;
  

  visible = true;
  
 // users:any []=[];
  formuser !:FormGroup;
  user  :any
  


  constructor(
    private service:EmployeeService,
    private formBuilder : FormBuilder,
    private tokenStorage: TokenStorageService,
  ) { 
    
    this.formuser = this.formBuilder.group({
      
     
      COD_SOC: ["tes"],

       });


  }

  ngOnInit(): void {
    var matricule :number;
    matricule = this.tokenStorage.getUser().matricule;
    console.log("err", this.tokenStorage.getUser().matricule);

    this.getMyContact(matricule);

    setTimeout(() => {
      this.visible = !this.visible;
    }, 3000);
   /* this.users = []; // Initialisez le tableau des utilisateurs avec vos données

    this.formuser = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      cin: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      matricule: ['', Validators.required],
      dateEntree: ['', Validators.required],
      posteTravail: ['', Validators.required],
      dateTitularisation: ['', Validators.required]
    });*/
  }
  // getallpersonne() {
  //   this.service.getallpersonne().subscribe(
  //     (data: any) => {
  //       this.user  = data;
  
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  getMyContact(matricule : number) {
    console.log("ich",matricule)
    this.service.getMyContact(matricule).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  save() {
    const userToUpdated = {
      nom: this.nomInput.nativeElement.value,
      prenom: this.prenomInput.nativeElement.value,
       sexe: this.sexeInput.nativeElement.value,
       cin: this.cinInput.nativeElement.value,
       dateNaissance: this.dateNaissanceInput.nativeElement.value,
       lieuNaissance: this.lieuNaissanceInput.nativeElement.value,
      // //matricule: this.matriculeInput.nativeElement.value,
       dateEntree: this.dateEntreeInput.nativeElement.value,
       dateTitularisation: this.dateTitularisation.nativeElement.value,
       
      matricule:123
      
    };
    console.log("eer" ,this.nomInput.nativeElement.value, this.prenomInput.nativeElement.value);

  this.service.update(userToUpdated).subscribe();
    
  }
                
                
}


