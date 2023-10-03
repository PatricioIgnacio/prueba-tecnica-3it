import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailMusic } from '../detail-music';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StyleMusicService {
  // URL correspondiente a la API de empleados en Backend.
  private baseUrl = 'http://localhost:8080/api/v1/estilos';

  constructor(private httpClient: HttpClient) {}

  surveyData(): Observable<DetailMusic[]> {
    return this.httpClient.get<DetailMusic[]>(`${this.baseUrl}`);
  }
}
