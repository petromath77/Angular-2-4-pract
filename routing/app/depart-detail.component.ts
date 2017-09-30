import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    template: `<h3>You selected department with id = {{departmentId}} </h3>
                <a (click)="goPrevious()">Previous</a>
                <a (click)="goNext()">Next</a>
                <br>
                <br>
                <button (click)="gotoDepartments()">Back</button>
                `,
    styles: [``]
})
export class DepartDetailComponent implements OnInit{
    public departmentId;
    constructor(private route: ActivatedRoute, private router: Router){}

    /*ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.departmentId = id;
    }*/
    ngOnInit(){
        this.route.params.subscribe((params: Params)=>{
            let id = parseInt(params['id']);
            this.departmentId = id;
        });
    }
    goPrevious(){
        let prevId = this.departmentId - 1;
        this.router.navigate(['/departments', prevId]);
    }
    goNext(){
        let nextId = this.departmentId + 1;
        this.router.navigate(['/departments', nextId]);
    }
    gotoDepartments(){
        let selectedId = this.departmentId? this.departmentId : null;
        this.router.navigate(['/departments', {id: selectedId}]);
    }
}