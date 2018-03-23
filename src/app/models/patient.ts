import { Constants } from "../utils/constants";
import { Deserializable } from "./deserializable";
import { DateUtil } from "../utils/date-util";
import { Telecom } from "./telecom";
import { Contact } from "./contact";
import { Address } from "./address";

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

   

    getGender(): string {
        return this.obj.gender ? this.obj.gender : ''
    }

    getBirthDate(): string {
        return this.obj.birthDate ? this.obj.birthDate : ''
    }

    getAge(): string {
        let dateUtil = new DateUtil();
        if (this.obj.birthDate){
            return dateUtil.getAge(this.obj.birthDate) 
        }
        return ''
        
    }

    getPhones(): Telecom[]{
        let phones: Telecom[] = []
        if (this.obj.telecom) {
            for (let phone of this.obj.telecom) {
                phones.push(new Telecom().deserialize(phone))
            }
        }
        return phones
    }

    getGuardians(): Contact[] {
        let contacts: Contact[] = []
        if (this.obj.contact) {
            for (let contact of this.obj.contact) {
                contacts.push(new Contact().deserialize(contact))
            }
        }
        return contacts
    }

    getAddresses(): Address[] {
        let addresses: Address[] = []
        if (this.obj.address) {
            for (let address of this.obj.address) {
                addresses.push(new Address().deserialize(address))
            }
        }
        
        return addresses
    }
}
