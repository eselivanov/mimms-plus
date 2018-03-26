import { Constants } from "../utils/constants";
import { Vaccine } from "./vaccine";
import { Activity } from "./activity";
import { Practitioner } from "./practitioner";


export class CarePlan {
    public obj: any

    constructor(obj: any) {   
        this.obj = obj
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
   
        return null

    }

    getActivity(): Activity{ 
        if (this.obj.activity && this.obj.activity.length > 0) {
            if (this.obj.activity[0]) {
                return new Activity(this.obj.activity[0], this)
            }
        }
        return null
    }

    getActivities(): Activity[] {
        let activities: Activity[] = []
        if (this.obj.activity) {
            for (let activity of this.obj.activity) {
                activities.push(new Activity(activity, this))
            }
        }
        return activities
    }

    getLocationObj(): any {
        let activity = this.getActivity()
        if (activity.obj.detail && activity.obj.detail.location && activity.obj.detail.location.reference) {
            let ref = activity.obj.detail.location.reference
            for (var obj of this.obj.contained) {
                if (ref.split('#')[1] === obj.id) {
                    return obj
                }
            }
            return null
        }
        
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
    
    getType(): string {
        if (this.obj.category && this.obj.category.length > 0) {
            if (this.obj.category[0].coding && this.obj.category[0].coding.length > 0) {
                return this.obj.category[0].coding[0].display
            }
        }
        return ""
    }

    getProviders(): Practitioner[] {
        let providers: Practitioner[] = []
        if (this.obj.careTeam) {
            for (let ref of this.obj.careTeam) { 
                for (let obj of this.obj.contained) {
                    if (ref.reference.split('#')[1] === obj.id) {
                        for (let participant of obj.participant){
                            for (let prac of this.obj.contained) {
                                if (participant.member.reference.split('#')[1] === prac.id) {
                                    providers.push(new Practitioner(prac))
                                    break
                                }
                            }
                        }
                        break
                    }
                }
            }
        }
        return providers
    }
}