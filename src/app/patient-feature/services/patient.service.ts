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
  sortingUtil: SortingUtil = new SortingUtil();
  selectedPatient: Patient = null;
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
              this.getPatientDemographics(id).subscribe(
                data => {
                  this.patients.push(new Patient().deserialize(data))
                  this.patients.sort(this.sortingUtil.nameCompare)
                  this.patientSubject.next(this.patients)
                },
                error => {
                  this.patientSubject.error('errr')
                }
              )
              break;
            }
          }
        }
        break;
      }
    }
  }

}

const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q');

