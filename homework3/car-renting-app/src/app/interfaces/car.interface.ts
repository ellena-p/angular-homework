import { EngineType } from "./car-engine.enum";

export interface Car{
    id:number;
    model:string;
    engineType: EngineType;
    yearOfProduction:string;
    priceToRent: number;
    image: string;
    isRented: boolean;
}
