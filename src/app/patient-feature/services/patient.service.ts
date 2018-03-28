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
    return this.http.get(this.userUrl + id )
  } 

  getAllPatients(details) {
    this.patients = []
    var membersObj = details.getMembersObj()
    if (membersObj){
      for (var member of membersObj.member) {
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
      }
    }else {
      console.log(`member fail ${JSON.stringify(membersObj)}`)
    }
    
  }



}