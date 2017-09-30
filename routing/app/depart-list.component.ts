import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'depart-list',
    template: `<h3>Depart List</h3>
                <ul class="items">
                    <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                        <span class="bge">{{department.id}}</span>{{department.name}}
                    </li>
                </ul>
    `,
    styles: [`.items{list-style: none; width: auto}
              .items li{background-color: #ccc; margin-bottom: 10px;  border-radius: 5px; cursor: pointer;}
               .items li:hover{margin-left: 5px;}
              .bge{background-color: #b1b1b1; display: inline-block; padding: 5px; margin-right: 10px; border-bottom-left-radius: 5px; border-top-left-radius:5px;}
              .items li.selected{background-color: #cfd8dc; color: #fff}
            `]
})
export class DepartListComponent{
    constructor(private router: Router, private route: ActivatedRoute){}
    departments = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "MongoDB"},
        {"id": 3, "name": "Bootstrap"},
        {"id": 4, "name": "Jquery"},
        {"id": 5, "name": "NodeJS"}
    ]

    ngOnInit(){
        this.route.params.subscribe((params: Params)=>{
            let id = parseInt(params['id']);
            this.selectedId = id;
        });
    }

    onSelect(department){
        this.router.navigate(['/departments', department.id]);
    }
    isSelected(department){
        return department.id === this.selectedId;
    }
}