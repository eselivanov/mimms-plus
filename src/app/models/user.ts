import { Constants } from "../utils/constants";

export class User {
    public obj: any

    constructor(obj: any){
        this.obj = obj
    }

    getUserId(): string {
      if (this.obj.identifier) {
       for (var id of this.obj.identifier) {
         if (id.type.text === Constants.USER_ID_KEY) {
           return id.value
         }
       }
      }
     return ""
   }

    getUserLogOn(): string {
        if (this.obj.identifier) {
         for (var id of this.obj.identifier) {
           if (id.type.text === Constants.USER_LOGON_KEY) {
             return id.value
           }
         }
        }
       return ""
     }
   
     getFamilyName(): string {
       if (this.obj.name) {
         for (var name of this.obj.name) {
           for (var familyName of name.family) {
             return familyName
           }
         }
       }
       return ""
     }
   
     getGivenName(): string {
       if (this.obj.name) {
         for (var name of this.obj.name) {
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
       for (var role of this.obj.role) {
         roleRef = role.organization.reference
         break;
       }
   
       for (var obj of this.obj.contained) {
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

}