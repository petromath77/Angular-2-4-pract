import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
 
@Injectable()
export class CarService{
 
    constructor(private http: Http){ }
     
    getData(){
        return this.http.get('cars.json');
    }
}