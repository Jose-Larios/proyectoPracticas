import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CarritoComprasPage {
  carrito: any[] = [];
  totalUnitario: number = 0;
  totalIva: number = 0;
  total: number = 0;
  constructor(private carritoService: CarritoService) {}

  //Visualizar productos
  ionViewWillEnter() {
    this.carrito = this.carritoService.getCarrito();
    this.totalUnitario = this.carritoService.sumaCarritoUnitario();
    this.totalIva = this.carritoService.sumCarritoIva();
    this.total = this.carritoService.sumCarritoTotal();
  }

  //Eliminar un producto del carrito
  eliminarDelCarrito(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId);
    this.carrito = this.carritoService.getCarrito();
    this.totalUnitario = this.carritoService.sumaCarritoUnitario();
    this.totalIva = this.carritoService.sumCarritoIva();
    this.total = this.carritoService.sumCarritoTotal();
  }

  //Comprar el carrito
  async comprarCarrito() {
    await this.carritoService.comprar();
    this.carrito = this.carritoService.getCarrito();
    this.totalUnitario = this.carritoService.sumaCarritoUnitario();
    this.totalIva = this.carritoService.sumCarritoIva();
    this.total = this.carritoService.sumCarritoTotal();
  }
}
