import { Constants } from "../utils/constants";
import { Deserializable } from "./deserializable";

export class Address implements Deserializable<Address> {
    public obj: any

    deserialize(input: any): Address {
        
        this.obj = input
        return this
    }

    getType(): string {
        if (this.obj.use) {
            return this.obj.use
        }
        return ''
    }

    getLines(): string[] {
        let addresses: string[] = []
        if (this.obj.line) {
            addresses = this.obj.line
        }
        return addresses
    }

}   
