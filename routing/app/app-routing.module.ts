import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartListComponent } from './depart-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartDetailComponent } from './depart-detail.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'departments', component: DepartListComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments/:id', component: DepartDetailComponent},
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routingComponents = [PageNotFoundComponent, HomeComponent, DepartListComponent, EmployeeListComponent, DepartDetailComponent];