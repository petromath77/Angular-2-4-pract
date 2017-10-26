import { Car } from "./car";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { CarService } from "./car.service";

@Injectable()

export class CarResolver implements Resolve<Car>{

    constructor (private carService: CarService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car> {
        let id = +route.params['id'];
        let car = this.carService.getProduct(id);
        return car;
        
    }
    
}