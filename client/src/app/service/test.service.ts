import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
   }

   baseUrl: string = 'https://localhost:44352';

   test(): Observable<any> {
    return this.http.get(this.baseUrl + '/WeatherForecast');
   }
}
