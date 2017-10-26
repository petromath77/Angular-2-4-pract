import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Car } from './car';
import { CarService } from './car.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/vagon.html',
    providers: [HttpService]
})

export class VagonComponent implements OnInit{
    cars: Car[];
    
      constructor(
        private carService: CarService,
        private router: Router) { }
     
      getCars(): void {
        this.carService
            .getCars()
            .then(cars => this.cars = cars);
      }
     
      ngOnInit(): void {
        this.getCars();
      }
}