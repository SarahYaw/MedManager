export interface medicationObject {
    id: number;
    name: string;
    dosage: string;
    description: string;
    morning: number;
    afternoon: number;
    evening: number;
    provider: string;
    refilled: Date;
    quantity: number;
}

export type MedicationList = medicationObject[];