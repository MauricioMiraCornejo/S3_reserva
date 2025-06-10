import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone: false,


})
export class MiPerfilPage {
  usuario: any = {};
  reservasCount: number = 0;

  constructor() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    // Obtener datos básicos del usuario
    const usuarioActual = localStorage.getItem('registeredUser');
    const todasReservas = JSON.parse(localStorage.getItem('reservas') || '[]');

    this.usuario = {
      nombre: usuarioActual,
      email: localStorage.getItem('userEmail') || 'No especificado',
      fechaRegistro: localStorage.getItem('fechaRegistro') || 'Fecha desconocida'
    };

    // Contar reservas del usuario
    this.reservasCount = todasReservas.filter(
      (reserva: any) => reserva.usuario === usuarioActual
    ).length;
  }

  actualizarPerfil() {
    // Lógica para actualizar el perfil
    localStorage.setItem('userEmail', this.usuario.email);
    // Puedes añadir más campos según necesites
  }
}