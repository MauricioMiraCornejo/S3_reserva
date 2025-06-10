import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
  standalone: false,
})
export class ReservaPage implements OnInit {
  nombreSala: string = 'Sala de Reuniones';
  fechaSeleccionada: string = new Date().toISOString();
  fechaMinima: string = new Date().toISOString();
  fechaMaxima: string = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
  
  horasDisponibles: string[] = [
    '09:00 - 10:00',
    '11:30 - 12:30',
    '15:00 - 16:00'
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  reservar(hora: string) {
    // Obtener el usuario actual del localStorage
    const usuarioActual = localStorage.getItem('registeredUser');
    
    if (!usuarioActual) {
      console.error('No hay usuario logueado');
      return;
    }

    // Crear objeto de reserva
    const reserva = {
      usuario: usuarioActual,
      sala: this.nombreSala,
      fecha: this.fechaSeleccionada,
      hora: hora,
      fechaReserva: new Date().toISOString()
    };

    // Obtener reservas existentes o inicializar array
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    
    // Agregar nueva reserva
    reservas.push(reserva);
    
    // Guardar en localStorage
    localStorage.setItem('reservas', JSON.stringify(reservas));

    console.log('Reserva guardada:', reserva);
    // Aquí puedes añadir un toast o alerta de confirmación
  }
irAHome() {
  this.router.navigate(['/home']);
}
  
}