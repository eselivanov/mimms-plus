import { Constants } from "../utils/constants";
import { Deserializable } from "./deserializable";

export class Telecom implements Deserializable<Telecom> {
    public obj: any

    deserialize(input: any): Telecom {
        
        this.obj = input
        return this
    }

    getType(): string {
        if (this.obj.use) {
            return this.obj.use
        }
        return ''
    }

    getValue(): string {
        if (this.obj.value) {
            return this.obj.value
        }
        return ''
    }

}