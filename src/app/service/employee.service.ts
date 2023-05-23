import { Injectable } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
const URL_API = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8081/allDemand';
  private url='http://localhost:8081/personnel/allPersonnel';
  private apiUrlUser = 'http://localhost:8081/api/auth/allusers';

  addEmpURL : string; 
  getEmpURL : string ;
  ddeleteEmpURL: string; 
   
  readonly API_URL="http://localhost:8081";
  constructor(private http : HttpClient) { 
    this.addEmpURL='http://localhost:58804/emp/addEmployee'; 
    this.getEmpURL='http://localhost:58804/emp/getAll'
    this.ddeleteEmpURL='http://localhost:58804/emp/deleteEmployeeById';
  }
addEmployee(emp : Employee): Observable<Employee>{
return this.http.post<Employee>(this.addEmpURL,emp); 
alert("L'employé a été ajouté avec succès !");

}


getAllEmployee(): Observable<Employee[]>{
  return this.http.get<Employee[]>(this.getEmpURL);
}


deleteEmployee(emp: Employee): Observable<any> {
  const url = `api/employees/${emp.id}`; 
  return this.http.delete(url);
  alert("L'employé sera supprimé !");
}
getall(){
  return this.http.get("http://localhost:8081/libredeman/allDemand")
}


getallpersonne(){
  return this.http.get("http://localhost:8081/personnel/allPersonnel")
}


save(us: any   ){
  return this.http.post("http://localhost:8081/libredeman/allDemand/save",us)
}
getalldem(){
  return this.http.get("http://localhost:8081/allPersonnel")
}
saveone(data: any): Observable<any> {
  return this.http.post<any>("http://localhost:8081/libredeman/addDemand", data);
}
getalluser(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}
getuser(): Observable<any> {
  return this.http.get<any>(this.apiUrlUser);
}
saveUser(data: any): Observable<any> {
  return this.http.post<any>("http://localhost:8081/users/allusers", data);
}

getpersonnel = (x: any): Observable<any[]> => {
  return this.http.post<any[]>("http://localhost:8081/personnel/allPersonnel", x);
};
create(contact: any){
  return this.http.post( this.url + 'create' , contact);
}


getMyContact( idUser: any ){
  return this.http.get( "http://localhost:8081/personnel/" + idUser );  
}


getById( id: any ){
  return this.http.get( this.url + 'getbyid/' + id );
}

delete( id: any ){
  return this.http.delete( this.url + 'delete/' + id );
}

update( personnel: any ): Observable<any>{
  console.log("ameni rahmouni ",personnel);

  return this.http.put<any>( "http://localhost:8081/personnel/update" , personnel  );
  
}

updateDemandeAccepter( id: any ,a:any){

  return this.http.put<any>( "http://localhost:8081/libredeman/updateAccepted/" +id,a );
  
}
updateDemandeRéffuser( personnel: any ): Observable<any>{

  return this.http.put<any>( "http://localhost:8081/libredeman/updateRefused" , personnel  );
  
}
saveonee(data: any): Observable<any> {
  return this.http.post<any>("http://localhost:8081/api/auth/AddUser", data);
}





}
