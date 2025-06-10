import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,

  

})
export class HomePage {
  nombreUsuario = 'Estudiante';

  constructor(private router: Router) {}

  navegarAReserva() {
    this.router.navigate(['/reserva']);
  }

  navegarAMisReservas() {
    this.router.navigate(['/mis-reservas']);
  }

  navegarAPerfil() {
    this.router.navigate(['/mi-perfil']);
  }
}