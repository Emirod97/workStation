import { ReturnStatement } from '@angular/compiler';

export class Alerts{
    
    private _id:number;
    private _description:string;

    constructor(id: number, description: string){
        this._id = id;
        this._description = description;
    }

    get id(): number{
        return this._id
    }

    set id(id: number){
        this._id = id;
    }

    get description(): string{
        return this._description = this.description;
    }


    }



