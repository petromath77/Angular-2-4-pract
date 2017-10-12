import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Car } from './car';

@Component({
    templateUrl: './templates/hatchback.html',
    providers: [HttpService]
})


export class HatchComponent implements OnInit{
    cars: Car[]=[];
    
    constructor(private httpService: HttpService){}
    ngOnInit(): void {
        this.httpService.getData()
        .subscribe((data: Response) => this.cars=data.json());
    }

}
