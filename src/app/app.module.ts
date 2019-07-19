import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DatabaseModule } from './database/database.module';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { FilmsComponent } from './films/films.component';
import { FilmsdetailComponent } from './filmsdetail/filmsdetail.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailComponent } from './peopledetail/peopledetail.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsdetailComponent } from './planetsdetail/planetsdetail.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesdetailComponent } from './speciesdetail/speciesdetail.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsdetailComponent } from './starshipsdetail/starshipsdetail.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesdetailComponent } from './vehiclesdetail/vehiclesdetail.component';
import { ListcommentComponent } from './listcomment/listcomment.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';

import { CommentsService } from './comments.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FilmsComponent,
    FilmsdetailComponent,
    PeopleComponent,
    PeopledetailComponent,
    PlanetsComponent,
    PlanetsdetailComponent,
    SpeciesComponent,
    SpeciesdetailComponent,
    StarshipsComponent,
    StarshipsdetailComponent,
    VehiclesComponent,
    VehiclesdetailComponent,
    ListcommentComponent,
    AddcommentComponent,
    BackbuttonComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    DatabaseModule,
    FormsModule,
    ShareButtonsModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
