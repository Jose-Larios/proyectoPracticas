import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoService } from '../carrito.service';

interface Product {
  id: number;
  nombre: string;
  precio: number;
  iva: number;
  totalPrecio: number;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class MainPage {
  productos: Product[] = [
    {
      id: 1,
      nombre: 'Natación',
      precio: 250,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/natacion.png',
      descripcion: 'Clase de natación para todos los niveles.',
    },
    {
      id: 2,
      nombre: 'Boxeo',
      precio: 200,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/boxeo.png',
      descripcion: 'Entrenamiento de boxeo con técnicas y sparring.',
    },
    {
      id: 3,
      nombre: 'Fútbol',
      precio: 150,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/futbol.png',
      descripcion: 'Clases de fútbol enfocadas en técnica y táctica.',
    },
    {
      id: 4,
      nombre: 'Básquetbol',
      precio: 180,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/basquetbol.png',
      descripcion: 'Mejora tus habilidades en básquetbol con expertos.',
    },
    {
      id: 5,
      nombre: 'Tenis',
      precio: 300,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/tenis.png',
      descripcion: 'Entrenamiento de tenis para principiantes y avanzados.',
    },
    {
      id: 6,
      nombre: 'Pádel',
      precio: 350,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/padel.png',
      descripcion: 'Clases dinámicas de pádel para todas las edades.',
    },
    {
      id: 7,
      nombre: 'Vóleibol',
      precio: 150,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/voleibol.png',
      descripcion: 'Aprende y mejora tu técnica en vóleibol.',
    },
    {
      id: 8,
      nombre: 'Taekwondo',
      precio: 200,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/taekwondo.png',
      descripcion: 'Disciplina y técnica en clases de Taekwondo.',
    },
    {
      id: 9,
      nombre: 'Yoga',
      precio: 180,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/yoga.png',
      descripcion: 'Sesiones de yoga para relajación y bienestar.',
    },
    {
      id: 10,
      nombre: 'Pilates',
      precio: 200,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/pilates.png',
      descripcion: 'Clases de pilates para mejorar fuerza y flexibilidad.',
    },
    {
      id: 11,
      nombre: 'CrossFit',
      precio: 250,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/crossfit.png',
      descripcion:
        'Entrenamientos intensos de CrossFit para acondicionamiento.',
    },
    {
      id: 12,
      nombre: 'Gimnasia',
      precio: 250,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/gimnasia.png',
      descripcion: 'Clases de gimnasia artística y funcional.',
    },
    {
      id: 13,
      nombre: 'Ciclismo',
      precio: 200,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/ciclismo.png',
      descripcion: 'Sesiones de ciclismo para resistencia y velocidad.',
    },
    {
      id: 14,
      nombre: 'Atletismo',
      precio: 150,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/atletismo.png',
      descripcion: 'Entrenamiento en velocidad y resistencia atlética.',
    },
    {
      id: 15,
      nombre: 'Ping pong',
      precio: 200,
      iva: 0,
      totalPrecio: 0,
      imagen: 'assets/pingpong.png',
      descripcion: 'Clases de ping pong para mejorar técnica y reflejos.',
    },
  ];
  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.calcularIva();
  }

  calcularIva() {
    this.productos = this.productos.map((producto) => ({
      ...producto,
      iva: producto.precio * 0.16,
      totalPrecio: producto.precio + producto.precio * 0.16,
    }));
  }

  agregarCarrito(product: any) {
    this.carritoService.agregarCarrito(product);
  }
}
