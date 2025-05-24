import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }
  
  baseUrl = "https://api.themoviedb.org/3";
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzAzZjYxZTAyMjZiNjI5YWI3ZGNlMTc0ZWE0NTM3MiIsIm5iZiI6MTc0NzI2MDcwMi4zMTcsInN1YiI6IjY4MjUxNTFlNWEwMTAwODU2ZGExNmY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIL_wGUoaJXi0q5Zzzg1hypxxV94QSwk2RmPmTJlDJE'
    }
  };

  //Banner de mídias da semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }
}
