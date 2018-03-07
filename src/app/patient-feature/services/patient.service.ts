import { Injectable } from '@angular/core';
import { Constants } from '../../utils/constants';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PatientService {
  /*search laptop for angie
  work on vendoor instead of waatching shows
  message abby about the linked in job and possibly talk to her
  get kuttyathan to send email saying he would like to join vendoor to this email k.afrane@vendoor.ca*/
  private userUrl = Constants.BASE_URL + '/Patient/';
  patients = []
  patientSubject: Subject<any[]> = new Subject();

  constructor(
    private http: HttpClient,
  ) { }
  getPatientDemo(id): Observable<any> {

    console.log('calling get user')
    return this.http.get(this.userUrl + id ,  {headers : headers})

  }

  getAllPatients(details) {//: Observable<any>{
    //for (var [index, patient] of patients) {
    this.patients = []
    let ref = details.subject.reference
    console.log(`in get all patients ${ref}`)
    for (var obj of details.contained) {
      if (ref.split('#')[1] === obj.id) {
        console.log(`member array ${JSON.stringify(obj.member)}`)
        for (const member of obj.member) {
          console.log(`member ${JSON.stringify(member)}`)
          var patientRef = member.entity.reference
          for (var patientObj of details.contained) {
            if (patientRef.split('#')[1] === patientObj.id){
              var id = ""
              for (var identifier of patientObj.identifier) {
                if (identifier.system === Constants.PATIENT_IDENTFIER_SYSTEM) {
                  id = identifier.value
                  break;
                }
              }
              this.getPatientDemo(id).subscribe(
                data => {
                  console.log(`user resp = ${JSON.stringify(data)}`)
                  this.patients.push(data)
                  this.patientSubject.next(this.patients)
                  /*if (memberIdx == (obj.member.length - 1)) {
                    this.patientSubject.complete()
                  }*/
                  //return this.simpleObservable
                },
                error => {
                  this.patientSubject.error('errr')
                  //return this.simpleObservable
                }
              )
              break;
            }
          }
        }
        break;
      }
    }
    
    //}
    //return this.simpleObservable
  }

  getClientId(patient): string {
    for (var identifier of patient.identifier) {
      if (identifier.system === Constants.PATIENT_IDENTFIER_SYSTEM) {
        return identifier.value
      }
    }
  }

  getFamilyName(patient): string {
    return (patient.name.length > 0 && patient.name[0].family.length > 0) ? patient.name[0].family[0] : ''
    //for (var name of patient.name) {

      //if (identifier.system === Constants.PATIENT_IDENTFIER_SYSTEM) {
        //return identifier.value
      //}
    //}
  }

  getGivenName(patient): string {
    return (patient.name.length > 0 && patient.name[0].given.length > 0) ? patient.name[0].given[0] : ''
  }
}

const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q');

