import { Constants } from "../utils/constants";

export class Vaccine {
    public obj: any
    readonly TRADE_URL:string = "Medication/agent#trade"

    constructor(obj: any) { 
        this.obj = obj
    }

    getAgent(): string {
        if (this.obj.code && this.obj.code.coding) {
            for (let code of this.obj.code.coding) {
                return code.display
            }
        }
        return ""
    }

    getBatch(): any[] {
        if (this.obj.product && this.obj.product.batch && this.obj.product.batch.length > 0) {
            return this.obj.product.batch
        }
        return []
    }

    getLotNumber(): string {
        let batch = this.getBatch()
        for (let element of batch) {
            return element.lotNumber
        }
        return ""
    }

    getLotExpiry(): string {
        let batch = this.getBatch()
        for (let element of batch) {
            return element.expirationDate
        }
        return ""
    }

    getTradeName(): string {
        if (this.obj.product && this.obj.product.extension) {
            for (let element of this.obj.product.extension) {
                if (element.url === this.TRADE_URL) {
                    return element.valueString
                }
            }
        }
    }
}