import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from '../../utils/constants';

@Injectable()
export class UserService {
  private userUrl = Constants.BASE_URL + '/Practitioner';
  userName: string = ''
  user: any = null
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

  getUserLogOn(): string {
     if (this.user.identifier) {
      for (var id of this.user.identifier) {
        if (id.type.text === "userLogonId") {
          return id.value
        }
      }
     }
    return ""
  }

  getFamilyName(): string {
    if (this.user.name) {
      for (var name of this.user.name) {
        for (var familyName of name.family) {
          return familyName
        }
      }
    }
    return ""
  }

  getGivenName(): string {
    if (this.user.name) {
      for (var name of this.user.name) {
        for (var givenName of name.given) {
          return givenName
        }
      }
    }
    return ""
  }

  getRoleObj(): any {
    var roleRef = null
    var orgVal = null
    console.log(JSON.stringify(this.user.role))
    for (var role of this.user.role) {
      roleRef = role.organization.reference
      break;
    }

    for (var obj of this.user.contained) {
      if (roleRef.split('#')[1] === obj.id) {
        return obj
      }
    }
    return null
  }
  getOrgId(): string {
    var roleObj = this.getRoleObj()
    if (roleObj) {
      for (var identifier of roleObj.identifier) {
        return identifier.value
      }
    }
    return ""
  }

  getPHU(): string {
    var roleObj = this.getRoleObj()
    if (roleObj) {
      return roleObj.name
    }
    return ""
  }

  storeUser(userObj) {
    sessionStorage.setItem(Constants.USER_KEY, JSON.stringify(userObj))
  }

  getStoredUser(): string {
    console.log(`get user ${sessionStorage.getItem(Constants.USER_KEY)}`)
    return sessionStorage.getItem(Constants.USER_KEY);
  }
}



