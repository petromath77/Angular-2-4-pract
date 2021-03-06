import { Pipe, PipeTransform } from '@angular/core';
import { Vagon } from './car';

@Pipe({ name: 'vagon' })
export class VagonPipe implements PipeTransform {
  transform(allCars: Vagon[]) {
    if(!allCars) return [];
    return allCars.filter(car => car.vagon);
  }
}