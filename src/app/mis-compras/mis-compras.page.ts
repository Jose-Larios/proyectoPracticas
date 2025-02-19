import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.page.html',
  styleUrls: ['./mis-compras.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class MisComprasPage {
  carritoComprado: any[] = [];
  totalUnitarioCompra: number = 0;
  totalIvaCompra: number = 0;
  totalCompra: number = 0;
  constructor(private carritoService: CarritoService) {}

  //Visualizar productos
  ionViewWillEnter() {
    this.carritoComprado = this.carritoService.getCarritoComplado();
    this.totalUnitarioCompra =
      this.carritoService.sumaCarritoUnitarioComprado();
    this.totalIvaCompra = this.carritoService.sumCarritoIvaComplado();
    this.totalCompra = this.carritoService.sumaCarritoComplado();
  }

  //Eliminar las compras realizadas
  eliminarCarritoComplado() {
    this.carritoComprado = this.carritoService.vaciarCarritoComplado();
    this.carritoComprado = this.carritoService.getCarritoComplado();
    this.totalUnitarioCompra =
      this.carritoService.sumaCarritoUnitarioComprado();
    this.totalIvaCompra = this.carritoService.sumCarritoIvaComplado();
    this.totalCompra = this.carritoService.sumaCarritoComplado();
  }
}
