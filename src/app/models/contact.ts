import { Constants } from "../utils/constants";
import { Deserializable } from "./deserializable";

export class Contact implements Deserializable<Contact> {
    public obj: any

    deserialize(input: any): Contact {
        
        this.obj = input
        return this
    }

    getContactGivenName(): string {
        return this.obj.name.given.length > 0 ? this.obj.name.given[0] : ''
    }

    getContactFamilyName(): string {
        return this.obj.name.family.length > 0 ? this.obj.name.family[0] : ''
    }

    getContactRelationship(): string {
        return (this.obj.relationship.length > 0 && this.obj.relationship[0].coding.length > 0) ? this.obj.relationship[0].coding[0].display : ""
    }
}   