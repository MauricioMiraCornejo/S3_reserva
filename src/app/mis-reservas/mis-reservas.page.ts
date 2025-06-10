import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.page.html',
  styleUrls: ['./mis-reservas.page.scss'],
  standalone: false,
})
export class MisReservasPage {
  misReservas: any[] = [];

  constructor(private router: Router) {}

  // Esta función se ejecuta cada vez que la página va a mostrarse
  ionViewWillEnter() {
    this.cargarReservas();
  }

  cargarReservas() {
    const usuarioActual = localStorage.getItem('registeredUser');
    const todasReservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    
    this.misReservas = todasReservas.filter(
      (reserva: any) => reserva.usuario === usuarioActual
    );
  }

  cancelarReserva(index: number) {
    const todasReservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    todasReservas.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(todasReservas));
    this.cargarReservas();
  }

  irAHome() {
    this.router.navigate(['/home']);
  }
}