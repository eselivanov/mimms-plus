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

const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1MDg4NTk4NjIsInN1YiI6ImRjYWRtMSIsImlzcyI6IlBIRFA6VG9rZW4iLCJhdWQiOiJQSERQOm1JTU1TIiwianRpIjoiNTE5ODNkZmEtNDIyZi00ZGUyLThmODctMWNkYjA2ZDNjMjI0IiwiaWF0IjoxNTA4NzczNDYyfQ.YFFmPTS1qvJTkvTQ9Ngy2Rj0tp12QP63VSnZ2JJ_N_1JFWjs0gl07FlFGr3d7jciCNfuWHokRGijkmSz6xDDwA]');

