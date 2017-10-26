import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HatchComponent } from './hatch.component';
import { SedanComponent } from './sedan.component';
import { VagonComponent } from './vagon.component';
import { CarDetailComponent } from './detail.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hatchback', component: HatchComponent},
    {path: 'hatchback/:id', component: CarDetailComponent},
    {path: 'sedan', component: SedanComponent},
    {path: 'sedan/:id', component: CarDetailComponent},
    {path: 'vagon', component: VagonComponent},
    {path: 'vagon/:id', component: CarDetailComponent},
    {path: '**', component: PageNotFoundComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routingComponents = [PageNotFoundComponent, HomeComponent, HatchComponent, SedanComponent, VagonComponent, CarDetailComponent];