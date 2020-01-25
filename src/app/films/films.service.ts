import { Injectable } from '@angular/core';

import { Films } from './films';
import { IGenericOperations } from '../generic/IGenericOperations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class FilmsService implements IGenericOperations<Films, number>{

  pathBase = environment.URL_API + '/films';

  constructor(private http: HttpClient) { }

  post(data: Films) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado FilmsService - método POST');
  }
  put(id?: number, data?: Films) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado FilmsService - método PUT');
  }
  patch(id?: number, data?: Films) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado FilmsService - método PATCH');
  }
  get(): Observable<IGenericResource<Films>> {
    console.log("Entrou dentro do serviço FilmsService - método GET");
    return this.http.get<IGenericResource<Films>>(this.pathBase);
  }
  getById(id?: number): Observable<Films> {
    console.log("Entrou dentro do serviço VehiclesService - método GET/:ID");
    return this.http.get<Films>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço FilmeService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }

}
