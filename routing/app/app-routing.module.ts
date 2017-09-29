import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartListComponent } from './depart-list.component';
import { EmployeeListComponent } from './employee-list.component';

const routes: Routes = [
    {path: 'departments', component: DepartListComponent},
    {path: 'employees', component: EmployeeListComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routingComponents = [DepartListComponent, EmployeeListComponent];