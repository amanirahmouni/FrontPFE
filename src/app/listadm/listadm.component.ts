import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { EmployeeService } from '../service/employee.service';
import { NgIf } from '@angular/common';
import { TokenStorageService } from '../helpers/token-storage.service';

@Component({
  selector: 'app-listadm',
  templateUrl: './listadm.component.html',
  styleUrls: ['./listadm.component.scss']
})
export class ListadmComponent implements OnInit {
  //role: any;
  demandes:any []=[];
  constructor(
    private serv:EmployeeService,
    private  TokenStorageService:TokenStorageService

    ){}
  ngOnInit(): void {
    this.getalluser()
    
  }
  getalluser() {
    this.serv.getall().subscribe(
      (data: any) => {
        this.demandes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  valider( id:any) {
    console.log("Demande validée.",id);
    const Demande ={

    }
      this.serv.updateDemandeAccepter(id,Demande).subscribe();

}
  annuler() {
    const Demande ={
      texte_Reponse:"Réfuser"

    }
      this.serv.updateDemandeRéffuser(Demande).subscribe();
}
admin() {
  // Vérifiez si l'acteur a le rôle "admin"
  // Utilisez votre logique d'authentification appropriée ici
  return this.TokenStorageService.role==='admin'
}


}
