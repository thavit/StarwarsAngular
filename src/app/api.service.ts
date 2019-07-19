import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const endpoint = "https://swapi.co/api/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable<any> {
    return this.httpClient.get(endpoint).pipe(map(this.extractData));
  }

  getFilms(): Observable<any> {
    return this.httpClient.get(endpoint + "films/").pipe(map(this.extractData));
  }
  getFilm(id): Observable<any> {
    return this.httpClient
      .get(endpoint + "films/" + id)
      .pipe(map(this.extractData));
  }

  getPeople(): Observable<any> {
    return this.httpClient
      .get(endpoint + "people/")
      .pipe(map(this.extractData));
  }
  getPerson(id): Observable<any> {
    return this.httpClient
      .get(endpoint + "people/" + id)
      .pipe(map(this.extractData));
  }

  getPlanets(): Observable<any> {
    return this.httpClient
      .get(endpoint + "planets/")
      .pipe(map(this.extractData));
  }
  getPlanet(id): Observable<any> {
    return this.httpClient
      .get(endpoint + "planets/" + id)
      .pipe(map(this.extractData));
  }

  getSpecies(): Observable<any> {
    return this.httpClient
      .get(endpoint + "species/")
      .pipe(map(this.extractData));
  }
  getOrganism(id): Observable<any> {
    return this.httpClient
      .get(endpoint + "species/" + id)
      .pipe(map(this.extractData));
  }

  getStarships(): Observable<any> {
    return this.httpClient
      .get(endpoint + "starships/")
      .pipe(map(this.extractData));
  }
  getStarship(id): Observable<any> {
    return this.httpClient
      .get(endpoint + "starships/" + id)
      .pipe(map(this.extractData));
  }

  getVehicles(): Observable<any> {
    return this.httpClient
      .get(endpoint + "vehicles/")
      .pipe(map(this.extractData));
  }
  getVehicle(id): Observable<any> {
    return this.httpClient
      .get(endpoint + "vehicles/" + id)
      .pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
