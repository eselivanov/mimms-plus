import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Clinic } from '../client-list/client-list.component';
import { Constants } from '../../utils/constants';
import { environment } from '../../../environments/environment';
import { CarePlan } from '../../models/care-plan';

@Injectable()
export class RemoteClinicListService {
  private remoteClinicsUrl = environment.url + '/CarePlan';
  private clinicDetailsUrl = environment.url + '/CarePlan/'
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

  getClinicDetails(clinicId, username): Observable<any> {

    let headerJson = {
      'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',
      'panorama_user' : username
    }
    var headers = new HttpHeaders(headerJson)
    return this.http.post(this.clinicDetailsUrl + clinicId, null,{ headers : headers })

  }

  getClinicDetailsWithCompletion(clinicId, userLogon, completion) {
    if (this.clinicDetails && this.clinicDetails.getId() === clinicId) {
      completion()
    }else{
      this.getClinicDetails(clinicId, userLogon).subscribe(
        data => {
          console.log(`clinic details ${JSON.stringify(data)}`)
          this.clinicDetails = new CarePlan(data)
          if (completion != null) {
            completion()
          }
        },
        error => {
  
        }
      )
    }
    
  }
}
