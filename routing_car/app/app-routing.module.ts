import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HatchComponent } from './hatch.component';
import { SedanComponent } from './sedan.component';
import { VagonComponent } from './vagon.component';
import { DetailComponent } from './detail.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hatchback', component: HatchComponent},
    {path: 'hatchback/:name', component: DetailComponent},
    {path: 'sedan', component: SedanComponent},
    {path: 'sedan/:name', component: DetailComponent},
    {path: 'vagon', component: VagonComponent},
    {path: 'vagon/:name', component: DetailComponent},
    {path: '**', component: PageNotFoundComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routingComponents = [PageNotFoundComponent, HomeComponent, HatchComponent, SedanComponent, VagonComponent, DetailComponent];