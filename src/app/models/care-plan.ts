import { Constants } from "../utils/constants";
import { Deserializable } from "./deserializable";

export class CarePlan implements Deserializable<CarePlan> {
    public obj: any

    deserialize(input: any): CarePlan {
        
        this.obj = input
        return this
    }

    getDates() {
        var dateArray = []
        for (var extension of this.obj.extension) {
            if (extension.url === "CarePlan/clinic#date") {
                dateArray.push(extension.valueDate)
            }
        }
        return dateArray.join("\n")
    }

    getId(): string {
        if (this.obj.id) {
            return this.obj.id
        }
        return null
    }

    getTitle(): string {
        if (this.obj.description) {
            return this.obj.description
        }
        return ''
    }

    getMembersObj(): any {
        if (this.obj.subject) {
            if (this.obj.subject.reference) {
                let ref = this.obj.subject.reference
                for (var obj of this.obj.contained) {
                    if (ref.split('#')[1] === obj.id) {
                        return obj
                    }
                }
            }
        }
        return null
    }

    getMemberId(member): string {
        
        //for (const member of members) {
        var patientRef = member.entity.reference
        for (var patientObj of this.obj.contained) {
            if (patientRef.split('#')[1] === patientObj.id) {
                var id = ""
                for (var identifier of patientObj.identifier) {
                    if (identifier.system === Constants.PATIENT_IDENTFIER_SYSTEM) {
                        return identifier.value
                    }
                }
                break;
            }
        }
        //}
                   
        return null

    }

    getLocationObj(): any {
        if (this.obj.activity && this.obj.activity.length > 0) {
            if (this.obj.activity[0].detail && this.obj.activity[0].detail.location && this.obj.activity[0].detail.location.reference) {
                let ref = this.obj.activity[0].detail.location.reference
                console.log(`location ref ${ref}`)
                for (var obj of this.obj.contained) {
                    if (ref.split('#')[1] === obj.id) {
                        return obj
                    }
                }
            }
        }
        return null
    }

    getLocation(): string {
        let loc = this.getLocationObj();
        if (loc) {
            return loc.name
        }
        return ''
    }

    getAddress(): any {
        let loc = this.getLocationObj()
        if (loc) {
            if (loc.address) {
                if (loc.address.line && loc.address.line.length > 0) {
                    return loc.address.line
                }
            }
        }
        return []
    }
    getNumberOfClients(): string {
        let membersObj = this.getMembersObj()
        if (membersObj) {
            return membersObj.quantity
        }
        return ''
    }
}