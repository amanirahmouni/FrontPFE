import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.scss']
})
export class InscritComponent implements OnInit {
  formInscrit!:FormGroup
  constructor(){}
  ngOnInit(): void {

   }

}
