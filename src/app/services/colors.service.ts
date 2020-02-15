import { Injectable } from '../components/current-enemy/node_modules/@angular/core';

@Injectable()
export class ColorsService {

   constructor() { }

   getColor(ratio: number): string {
      if (ratio >= .8) { return '#1de738' };
      if (ratio >= .5) { return '#d0c316' };
      return '#cb1515';
   }

   getColor2(ratio: number): string {
      if (ratio >= .8) { return 'rgba(87, 131, 32, 1)' };
      if (ratio >= .5) { return 'rgba(131, 97, 32, 1)' };
      return 'rgba(131, 32, 32, 1)';
   }

   getColor3(ratio: number): string {
      if (ratio >= .8) { return 'green' };
      if (ratio >= .5) { return 'yellow' };
      return 'red';
   }

}
