export class Params{

    _luminosityMax: number;
    _luminosityMin: number;
    _temperatureMax: number;
    _temperatureMin: number;
    _noiseMax: number;
    _noiseMin: number;
    _vibrationMax: number;
    _vibrationMin: number;


    constructor(luminosityMax: number, luminosityMin: number, temperatureMax: number, temperatureMin: number, noiseMax: number, noiseMin: number, vibrationMax: number, vibrationMin: number){

        this._luminosityMax = luminosityMax;
        this._luminosityMin = luminosityMin;
        this._temperatureMax = temperatureMax;
        this._temperatureMin = temperatureMin;
        this._noiseMax = noiseMax;
        this._noiseMin = noiseMin;
        this._vibrationMax = vibrationMax;
        this._vibrationMin = vibrationMin;

    } 


    get luminosityMax(): number{
        return this._luminosityMax;
    }
    
    set luminosityMax(luminosityMax: number){
        this._luminosityMax = luminosityMax;
    }

    get luminosityMin(): number{
        return this.luminosityMin;
    }
    
    set luminosityMin(luminosityMin: number){
        this._luminosityMin = luminosityMin;
    }

    get temperatureMax(): number{
        return this._temperatureMax;
    }

    set temperatureMax(temperatureMax: number){
        this._temperatureMax = temperatureMax;
    }

    get temperatureMin(): number{
        return this._temperatureMin;
    }

    set temperatureMin(temperatureMin: number){
        this._temperatureMin = temperatureMin;
    }

    get noiseMax(): number{
        return this._noiseMax;
    }

    set noiseMax(noiseMax: number){
        this._noiseMax = noiseMax;
    }

    get noiseMin(): number{
        return this._noiseMin;
    }

    set noiseMin(noiseMin: number){
        this._noiseMin = noiseMin;
    }

    get vibrationMax(): number{
        return this._vibrationMax;
    }

    set vibrationMax(vibrationMax: number){
        this._vibrationMax = vibrationMax;
    }

    get vibrationMin(): number{
        return this._vibrationMin;
    }

    set vibrationMin(vibrationMin: number){
        this._vibrationMin = vibrationMin;
    }

   
    
}