import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from '../../utils/constants';
import { environment } from '../../../environments/environment';
import { CarePlan } from '../../models/care-plan';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RemoteClinicListService {
  private remoteClinicsUrl = environment.url + '/CarePlan';
  private clinicDetailsUrl = environment.url + '/CarePlan/'
  clinicSubject: Subject<CarePlan> = new Subject<CarePlan>()
  clinicDetails: CarePlan;
  constructor(
    private http: HttpClient
  ) { }


  getRemoteClinics(username): Observable<any> {
    
    let headerJson = {
      'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',
      'panorama_user' : username
    }
    var headers = new HttpHeaders(headerJson)
    return this.http.post(this.remoteClinicsUrl, null,{ headers : headers})

  }

  getClinicDetailsApi(clinicId, username): Observable<any> {

    let headerJson = {
      'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',
      'panorama_user' : username
    }
    var headers = new HttpHeaders(headerJson)
    return this.http.post(this.clinicDetailsUrl + clinicId, null,{ headers : headers })

  }

  getClinicDetails(clinicId, userLogon) {
    if (this.clinicDetails && this.clinicDetails.getId() === clinicId) {
      this.clinicSubject.next(this.clinicDetails)
    }else{
      this.getClinicDetailsApi(clinicId, userLogon).subscribe(
        data => {
          this.clinicDetails = new CarePlan(data)
          this.clinicSubject.next(this.clinicDetails)
        },
        error => {
  
        }
      )
    }
    
  }

  /*getClinicDetailsWithCompletion(clinicId, userLogon, completion) {
    if (this.clinicDetails && this.clinicDetails.getId() === clinicId) {
      //completion()
      this.clinicSubject.next(this.clinicDetails)
    }else{
      this.getClinicDetails(clinicId, userLogon).subscribe(
        data => {
          console.log(`clinic details ${JSON.stringify(data)}`)
          this.clinicDetails = new CarePlan(data)
          if (completion != null) {
            //completion()
            this.clinicSubject.next(this.clinicDetails)
          }
        },
        error => {
  
        }
      )
    }
    
  }*/
}
