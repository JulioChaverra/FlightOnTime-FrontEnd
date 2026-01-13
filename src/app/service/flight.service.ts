import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeatherDTO {
  temperature: number;
  precipitation: number;
  windSpeed: number;
  forecast: boolean;
}

export interface FlightDetail {
  aerolinea: string;
  aerolineaIata: string;
  vuelo: string;

  origen: string;
  origenIata: string;
  paisOrigen: string;
  ciudadOrigen: string;

  destino: string;
  destinoIata: string;
  paisDestino: string;
  ciudadDestino: string;

  horaSalida: string; // "2026-01-13 16:00"
  horaLlegada: string; // "2026-01-13 18:30"
  duracion: Number; // en minutos

  climaActual: WeatherDTO;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private readonly API_URL = 'http://localhost:8080/api/routes';

  constructor(private http: HttpClient) {}

  // 🚧 Por ahora NO dinámico
  getFlightDetailStatic(): Observable<FlightDetail> {
    return this.http.get<FlightDetail>(
      `${this.API_URL}/vuelo/AV8479`
    );
  }}
