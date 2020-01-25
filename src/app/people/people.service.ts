import { Injectable } from '@angular/core';
import { IGenericOperations } from '../generic/IGenericOperations';
import { People } from './people';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements IGenericOperations<People, number>{

  pathBase = environment.URL_API + '/people';

  constructor(private http: HttpClient) { }

  post(data: People) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado PeopleService - método POST');
  }
  put(id?: number, data?: People) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado PeopleService - método PUT');
  }
  patch(id?: number, data?: People) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado PeopleService - método PATCH');
  }
  get(): Observable<IGenericResource<People>> {
    console.log("Entrou dentro do serviço FilmsService - método GET");
    return this.http.get<IGenericResource<People>>(this.pathBase);
  }
  getById(id?: number): Observable<People> {
    console.log("Entrou dentro do serviço PeopleService - método GET/:ID");
    return this.http.get<People>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço PeopleService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }

}
