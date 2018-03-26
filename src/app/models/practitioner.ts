import { Constants } from "../utils/constants";

export class Practitioner {
    public obj: any

    constructor(obj: any){
        this.obj = obj
    }

    getId(): string {
        if (this.obj.identifier) {
            for (let id of this.obj.identifier) {
                if (id.system && id.system === Constants.PRACTITIONER_ID_SYSTEM) {
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

    getDesignation(): string {
        if (this.obj.name) {
            for (var name of this.obj.name) {
                for (var suffix of name.suffix) {
                    return suffix
                }
            }
        }
        return ""
    }
      
}