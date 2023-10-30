import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  nombre = 'Mario';
  apellido='Luján';
  edad = 26;
  sueldos = [1500, 2500, 6000];

  contador = 1;
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }

  cambiarEdad(cantidad: number): void {
    this.edad += cantidad;
  }
}
