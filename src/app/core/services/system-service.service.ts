import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { SystemAddReq } from 'src/app/shared/models/request/system/system-add-req';
import { SystemEditReq } from 'src/app/shared/models/request/system/system-edit-req';
import { SystemDeleteReq } from 'src/app/shared/models/request/system/system-delete-req';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};
@Injectable()
export class SystemSystemService {
   apiUrl =  "http://iam2-api.staging.188.166.196.188.nip.io/iam/api/v2/system";
  constructor(
    private httpClient: HttpClient
  ) { }
  getAllSystem():Observable<any>{
    return this.httpClient.get(this.apiUrl,httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  }
  getAddSystem(body:SystemAddReq):Observable<any>{
    return  this.httpClient.post(this.apiUrl,body,httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  }
  getUpdateSystem(body:SystemEditReq):Observable<any>{
    return  this.httpClient.put(this.apiUrl,body,httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  }
  getDeleteSystem(systemCode:SystemDeleteReq):Observable<any>{
    return  this.httpClient.delete(this.apiUrl+"/{$"+systemCode.systemCode+"}",httpOptions).pipe(
      tap(_ => console.log('success'))
    );
  }
 
}
