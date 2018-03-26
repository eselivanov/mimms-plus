import { Constants } from "../utils/constants";

export class Telecom {
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

    getValue(): string {
        if (this.obj.value) {
            return this.obj.value
        }
        return ''
    }

}