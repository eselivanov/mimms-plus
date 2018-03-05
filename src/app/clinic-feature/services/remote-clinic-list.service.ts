import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Clinic } from '../client-list/client-list.component';
import { Constants } from '../../utils/constants';

@Injectable()
export class RemoteClinicListService {
  private remoteClinicsUrl = Constants.BASE_URL + '/CarePlan/_search';
  constructor(
    private http: HttpClient,
  ) { }


  getRemoteClinics(orgId): Observable<any> {

    console.log('calling get remote clnics')
    let params = new HttpParams();
    params = params.append('organization.identifier', orgId);
    return this.http.get(this.remoteClinicsUrl, { headers : headers, params: params })

  }
}

const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q');

