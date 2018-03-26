import { Constants } from "../utils/constants";
import { Vaccine } from "./vaccine";
import { CarePlan } from "./care-plan";

export class Activity {
    public obj: any
    public clinic: CarePlan
    public vaccine: Vaccine

    constructor(obj: string, clinic: CarePlan) {
        this.obj = obj
        this.clinic = clinic
        this.vaccine = this.getVaccine()
    }

    getVaccine(): Vaccine {
        if (this.obj.detail){
            let ref = this.obj.detail.productReference.reference
            for (var obj of this.clinic.obj.contained) {
                if (ref.split('#')[1] === obj.id) {
                    return new Vaccine(obj)
                }
            }
        }
        
        return null
    }

    getDosageValue(): string {
        if (this.obj.detail) {
            if (this.obj.detail.dailyAmount) {
                if (this.obj.detail.dailyAmount.value) {
                    return this.obj.detail.dailyAmount.value
                }
            }
        }
        return ""
    }

    getDosageUnit(): string {
        if (this.obj.detail) {
            if (this.obj.detail.dailyAmount) {
                if (this.obj.detail.dailyAmount.unit) {
                    return this.obj.detail.dailyAmount.unit
                }
            }
        }
        return ""
    }

    getRoute(): string {
        if (this.obj.detail){
            if (this.obj.detail.code && this.obj.detail.code.coding) {
                for (let code of this.obj.detail.code.coding) {
                    return code.display
                }
            }
        }
        return ""
    }

    getReason(): string {
        if (this.obj.detail){
            if (this.obj.detail.reasonCode) {
                for (let reasonCode of this.obj.detail.reasonCode) {
                    if (reasonCode.coding) {
                        for (let code of this.obj.detail.reasonCode[0].coding) {
                            return code.display
                        }
                    }
                }
                
            }
        }
        return ""
    }

    getRequired(): string {
        if (this.obj.detail) {
            if (this.obj.detail.quantity && this.obj.detail.quantity.value) {
                return this.obj.detail.quantity.value
            }
        }
        return ""
    }





}