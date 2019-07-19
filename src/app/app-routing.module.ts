import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from "./category/category.component";
import { FilmsComponent } from "./films/films.component";
import { PeopleComponent } from "./people/people.component";
import { PlanetsComponent } from "./planets/planets.component";
import { SpeciesComponent } from "./species/species.component";
import { StarshipsComponent } from "./starships/starships.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { FilmsdetailComponent } from "./filmsdetail/filmsdetail.component";
import { PeopledetailComponent } from "./peopledetail/peopledetail.component";
import { PlanetsdetailComponent } from "./planetsdetail/planetsdetail.component";
import { SpeciesdetailComponent } from "./speciesdetail/speciesdetail.component";
import { StarshipsdetailComponent } from "./starshipsdetail/starshipsdetail.component";
import { VehiclesdetailComponent } from "./vehiclesdetail/vehiclesdetail.component";

const routes: Routes = [
  {
    path: "films/:id",
    component: FilmsdetailComponent,
    data: { title: "Film Details" }
  },
  { path: "films", component: FilmsComponent },

  {
    path: "people/:id",
    component: PeopledetailComponent,
    data: { title: "Person Details" }
  },
  { path: "people", component: PeopleComponent },

  {
    path: "planets/:id",
    component: PlanetsdetailComponent,
    data: { title: "Planet Details" }
  },
  { path: "planets", component: PlanetsComponent },

  {
    path: "species/:id",
    component: SpeciesdetailComponent,
    data: { title: "Species Details" }
  },
  { path: "species", component: SpeciesComponent },

  {
    path: "starships/:id",
    component: StarshipsdetailComponent,
    data: { title: "Starship Details" }
  },
  { path: "starships", component: StarshipsComponent },

  {
    path: "vehicles/:id",
    component: VehiclesdetailComponent,
    data: { title: "Vehicle Details" }
  },
  { path: "vehicles", component: VehiclesComponent },

  { path: "", component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
