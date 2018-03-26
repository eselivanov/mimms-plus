import { Constants } from "../utils/constants";

export class Address {
    public obj: any

    constructor(obj: any) {   
        this.obj = obj
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
