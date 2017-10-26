import { Pipe, PipeTransform } from '@angular/core';
import { Hatchback } from './car';

@Pipe({ name: 'hatchback' })
export class HatchbackPipe implements PipeTransform {
  transform(allCars: Hatchback[]) {
    if(!allCars) return [];
    return allCars.filter(car => car.hatchback);
  }
}
