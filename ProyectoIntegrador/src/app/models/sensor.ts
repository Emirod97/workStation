import { Data } from './data';
import { Params } from './params';
import { Alerts } from './alerts';

export class Sensor{

    id:string;
    data:Data;
    params:Params;
    alerts:Alerts;

    constructor(id:string, data:Data, params:Params, alerts:Alerts){

        this.id = id;
        this.data = data;
        this.params = params;
        this.alerts = alerts;

    }
}