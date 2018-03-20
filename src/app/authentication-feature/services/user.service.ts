import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from '../../utils/constants';
import { environment } from '../../../environments/environment';
import { Practitioner } from '../../models/practitioner';

@Injectable()
export class UserService {
  private userUrl = environment.url + '/Practitioner';
  userName: string = ''
  user: Practitioner;
  constructor(
    private http: HttpClient,
  ) { }


  getUser(): Observable<any> {

    console.log('calling get user')
    let headerJson = {
      'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',
      'panorama_user' : this.userName
    }
    var headers = new HttpHeaders(headerJson)
    console.log(JSON.stringify(headers))
    return this.http.post(this.userUrl,  null,{headers : headers})

  }

  storeUser(userObj) {
    sessionStorage.setItem(Constants.USER_KEY, JSON.stringify(userObj))
  }

  getStoredUser(): string {
    console.log(`get user ${sessionStorage.getItem(Constants.USER_KEY)}`)
    return sessionStorage.getItem(Constants.USER_KEY);
  }
}



