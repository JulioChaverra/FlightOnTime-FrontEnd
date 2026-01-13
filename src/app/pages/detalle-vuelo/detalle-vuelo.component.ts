import { Component, OnInit } from '@angular/core';
import { FlightDetail, FlightService } from '../../service/flight.service';

@Component({
  selector: 'app-detalle-vuelo',
  templateUrl: './detalle-vuelo.component.html',
  styleUrl: './detalle-vuelo.component.css'
})
export class DetalleVueloComponent implements OnInit {

  flight!: FlightDetail;
  loading = true;
  error = false;

  // ⏱️ Duración calculada para la vista
  duracionHoras = 0;
  duracionMinutos = 0;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    // 🔒 Llamada estática por ahora
    this.flightService.getFlightDetailStatic()
      .subscribe({
        next: (data) => {
          this.flight = data;

          // 👉 Convertir minutos a horas y minutos
          this.duracionHoras = Math.floor(Number(this.flight.duracion) / 60);
          this.duracionMinutos = Number(this.flight.duracion) % 60;

          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
      });
  }
}
