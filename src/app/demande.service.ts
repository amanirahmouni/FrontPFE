import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {
    readonly API_URL="http://localhost:8081";
    readonly ENDPOINT_CARS="/allDemand"

  constructor(private httpClient: HttpClient) { }
  getDemande(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_CARS)
  }
}
