import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RoleView } from 'src/app/shared/models/request/role/role-view';
import { RoleAdd } from 'src/app/shared/models/request/role/role-add';
import { RoleEdit } from 'src/app/shared/models/request/role/role-edit';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};
@Injectable()
export class RoleServiceService {
  apiUrl = "http://iam2-api.jx-prioradmin-iam2-api-pr-4.188.166.196.188.nip.io/iam/api/v2/role";
  constructor(
    private httpClient: HttpClient
  ) { }

  getRoleBySystemId(body:RoleView):Observable<any>{
    var URL = this.apiUrl+"/"+body.systemId;
    return  this.httpClient.post(URL,httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  } 

  addRole(body:RoleAdd):Observable<any>{
    return  this.httpClient.post(this.apiUrl,body,httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  } 

  editRole(body:RoleEdit):Observable<any>{
    return  this.httpClient.put(this.apiUrl,body,httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  } 

}
