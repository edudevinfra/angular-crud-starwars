import { Observable } from 'rxjs';
import { IGenericResource } from './igeneric-resource';


export interface IGenericOperations<T,N> {
    post(data : T);
    put(id? : N, data? : T);
    patch(id? : N, data?: T);
    get(): Observable<IGenericResource<T>>; //Array<T>;
    getById(id? : N) : Observable<T>;
    delete(id? : N);
}
