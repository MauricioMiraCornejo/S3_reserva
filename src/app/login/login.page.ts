import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: false,
})
export class LoginPage {
  username = '';
  password = '';
  message = '';

  constructor(private router: Router) {} // Inyecta Router

  login() {
    const savedUser = localStorage.getItem('registeredUser');
    const savedPass = localStorage.getItem('registeredPass');

    if (this.username === savedUser && this.password === savedPass) {
    this.message = 'Login successful!';
    console.log("Redirigiendo a /home..."); // Verifica si llega aquí
    this.router.navigate(['/home']).then(() => {
      console.log("Redirección exitosa"); // Verifica si navegó
    }).catch(err => {
      console.error("Error al navegar:", err); // Captura errores
    });
  } else {
    this.message = 'Invalid credentials!';
  }
}

  register() {
    localStorage.setItem('registeredUser', this.username);
    localStorage.setItem('registeredPass', this.password);
    this.message = 'Registration successful! Now you can log in.';
  }
}