import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clinic } from '../client-list/client-list.component';
import { RemoteClinic } from '../../dialogs/remote-clinics/remote-clinics.component';

@Injectable()
export class RemoteClinicListService {
  private heroesUrl = 'https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir/Lot/getLotInfos';
  constructor(
    private http: HttpClient,
  ) { }


  getRemoteClinics(): Observable<Object> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    console.log('calling get remote clnics')
    return this.http.get(this.heroesUrl, { headers : headers })
    /*return of([
      {id: '249291', name: 'DC-Test-Remote Clinic 1', dates:'2017 Dec 21', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
      {id: '222141', name: 'DC-Test-Remote Clinic 2', dates:'2017 May 12', clients: 38, downloaded: '2018 Jan 18', status: 'warning'},
      {id: '249441', name: 'DC-Test-Remote Clinic 3', dates:'2017 Dec 13', clients: 38, downloaded: '2018 Jan 17', status: 'warning'},
      {id: '223412', name: 'DC-Test-Remote Clinic 4', dates:'2017 Feb 18', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
    ]);*/
  }
}

const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1MDg4NTk4NjIsInN1YiI6ImRjYWRtMSIsImlzcyI6IlBIRFA6VG9rZW4iLCJhdWQiOiJQSERQOm1JTU1TIiwianRpIjoiNTE5ODNkZmEtNDIyZi00ZGUyLThmODctMWNkYjA2ZDNjMjI0IiwiaWF0IjoxNTA4NzczNDYyfQ.YFFmPTS1qvJTkvTQ9Ngy2Rj0tp12QP63VSnZ2JJ_N_1JFWjs0gl07FlFGr3d7jciCNfuWHokRGijkmSz6xDDwA]');
/*{
  headers: new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1MDg4NTk4NjIsInN1YiI6ImRjYWRtMSIsImlzcyI6IlBIRFA6VG9rZW4iLCJhdWQiOiJQSERQOm1JTU1TIiwianRpIjoiNTE5ODNkZmEtNDIyZi00ZGUyLThmODctMWNkYjA2ZDNjMjI0IiwiaWF0IjoxNTA4NzczNDYyfQ.YFFmPTS1qvJTkvTQ9Ngy2Rj0tp12QP63VSnZ2JJ_N_1JFWjs0gl07FlFGr3d7jciCNfuWHokRGijkmSz6xDDwA]' })
};*/
