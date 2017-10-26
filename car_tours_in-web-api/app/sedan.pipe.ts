import { Pipe, PipeTransform } from '@angular/core';
import { Sedan } from './car';

@Pipe({ name: 'sedan' })
export class SedanPipe implements PipeTransform {
  transform(allCars: Sedan[]) {
    if(!allCars) return [];
    return allCars.filter(car => car.sedan);
  }
}

