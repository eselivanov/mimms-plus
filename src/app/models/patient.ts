import { Constants } from "../utils/constants";
import { Deserializable } from "./deserializable";

export class Patient implements Deserializable<Patient> {
    public obj: any

    deserialize(input: any): Patient {
        
        this.obj = input
        return this
    }

    getClientId(): string {
        for (var identifier of this.obj.identifier) {
            if (identifier.system === Constants.PATIENT_IDENTFIER_SYSTEM) {
                return identifier.value
            }
        }
    }

    getOOID(): string {
        for (var identifier of this.obj.identifier) {
            if (identifier.system === Constants.PATIENT_OOID_SYSTEM) {
                return identifier.value
            }
        }
    }

    getHCN(): string {
        for (var identifier of this.obj.identifier) {
            if (identifier.system === Constants.PATIENT_HCN_SYSTEM) {
                return identifier.value
            }
        }
    }

    getFamilyName(): string {
        return (this.obj.name.length > 0 && this.obj.name[0].family.length > 0) ? this.obj.name[0].family[0] : ''
    }

    getGivenName(): string {
        return (this.obj.name.length > 0 && this.obj.name[0].given.length > 0) ? this.obj.name[0].given[0] : ''
    }

    getContactGivenName(name): string {
        return name.given.length > 0 ? name.given[0] : ''
    }

    getContactFamilyName(name): string {
        return name.family.length > 0 ? name.family[0] : ''
    }

    getContactRelationship(contact): string {
        return (contact.relationship.length > 0 && contact.relationship[0].coding.length > 0) ? contact.relationship[0].coding[0].display : ""
    }
}
