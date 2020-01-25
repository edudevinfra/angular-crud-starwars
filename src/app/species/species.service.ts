import { Injectable } from '@angular/core';
import { IGenericOperations } from '../generic/IGenericOperations';
import { Species } from './species';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService implements IGenericOperations<Species, number>{
  
  pathBase = environment.URL_API + '/peoples';

  constructor(private http: HttpClient) { }

  post(data: Species) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado SpeciesService - método POST');
  }
  put(id?: number, data?: Species) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado SpeciesService - método PUT');
  }
  patch(id?: number, data?: Species) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado SpeciesService - método PATCH');
  }
  get(): Observable<IGenericResource<Species>> {
    console.log("Entrou dentro do serviço FilmsService - método GET");
    return this.http.get<IGenericResource<Species>>(this.pathBase);
  }
  getById(id?: number): Observable<Species> {
    console.log("Entrou dentro do serviço SpeciesService - método GET/:ID");
    return this.http.get<Species>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço SpeciesService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }

}
