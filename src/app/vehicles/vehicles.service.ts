import { Injectable } from '@angular/core';
import { IGenericOperations } from '../generic/IGenericOperations';
import { Vehicles } from './vehicles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService implements IGenericOperations<Vehicles, number>{
  
  pathBase = environment.URL_API + '/peoples';

  constructor(private http: HttpClient) { }

  post(data: Vehicles) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado VehiclesService - método POST');
  }
  put(id?: number, data?: Vehicles) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado VehiclesService - método PUT');
  }
  patch(id?: number, data?: Vehicles) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado VehiclesService - método PATCH');
  }
  get(): Observable<IGenericResource<Vehicles>> {
    console.log("Entrou dentro do serviço FilmsService - método GET");
    return this.http.get<IGenericResource<Vehicles>>(this.pathBase);
  }
  getById(id?: number): Observable<Vehicles> {
    console.log("Entrou dentro do serviço VehiclesService - método GET/:ID");
    return this.http.get<Vehicles>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço VehiclesService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }
}
