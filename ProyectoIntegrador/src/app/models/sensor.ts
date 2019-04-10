import { Data } from './data';
import { Params } from './params';
import { Alerts } from './alerts';

export class Sensor{

    id:string;
    data:Data;
    params:Params;
    alerts:Alerts;
}