import { Injectable } from '@angular/core';
import { Constants } from '../../utils/constants';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SortingUtil } from '../../utils/sorting-util';
import { Patient } from '../../models/patient';


@Injectable()
export class PatientService {
  private userUrl = "https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir" + '/Patient/';
  patients = []
  patientSubject: Subject<any[]> = new Subject();
  selectedPatient: Patient = null;
  sortingUtil: SortingUtil = new SortingUtil();

  constructor(
    private http: HttpClient,
    
  ) { }


  getPatientDemographics(id): Observable<any> {

    console.log('calling get user')
    let headerJson = {
      'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q'
    }
    var headers = new HttpHeaders(headerJson)
    return this.http.get(this.userUrl + id ,  {headers : headers})

  } 

  getAllPatients(details) {
    this.patients = []
    var membersObj = details.getMembersObj()
    if (membersObj){
      var counter = 0
      for (var member of membersObj.member) {
        console.log(`member ${counter} b4 success ${details.getMemberId(member)}`)
        this.getPatientDemographics(details.getMemberId(member)).subscribe(
          data => {
            this.patients.push(new Patient(data))
            this.patients.sort(this.sortingUtil.nameCompare)
            this.patientSubject.next(this.patients)
            console.log(`success id ${details.getMemberId(member)}`)
          },
          error => {
            console.log(`member id ${details.getMemberId(member)}`)
            this.patientSubject.error('errr')
          }
        )
        counter++
      }
      console.log('exit loop')
    }else {
      console.log(`member fail`)
    }
    
  }

}