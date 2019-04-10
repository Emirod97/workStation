export class Data{

   date:Date;
   luminosity:number;
   temperature:number;
   noise:number;
   vibration:number;

   constructor(date:Date,
      luminosity:number,
      temperature:number,
      noise:number,
      vibration:number){

         this.date=date;
         this.luminosity=luminosity;
         this.temperature=temperature;
         this.noise=noise;
         this.vibration=vibration;

   }
   
}