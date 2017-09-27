import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    getEmployees(){
        return [
            {"id":1,"name": "Andrew", "gender": "male"},
            {"id":2,"name": "Antony", "gender": "male"},
            {"id":3,"name": "Ann", "gender": "female"},
            {"id":4,"name": "Jan", "gender": "male"}
        ]
    }
}