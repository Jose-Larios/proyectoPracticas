import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: any[] = [];
  carritoComprado: any[] = [];

  constructor(private alertController: AlertController) {}

  //Alerta que ya esta agregado
  async productoAgregado() {
    const alert = await this.alertController.create({
      message: 'Este producto ya se agrego',
      buttons: ['Entendido'],
    });
    await alert.present();
  }

  //Alerta de compra
  async compraRealizada() {
    return new Promise(async (respuesta) => {
      const alert = await this.alertController.create({
        message: 'Desea realizar la compra',
        buttons: [
          {
            text: 'No',
            handler: () => respuesta(false),
          },
          {
            text: 'Si',
            handler: () => respuesta(true),
          },
        ],
      });
      await alert.present();
    });
  }

  //Obtener los productos
  getCarrito() {
    return this.carrito;
  }

  //Obtener los producctos que ya se compraron
  getCarritoComplado() {
    return this.carritoComprado;
  }

  //Agregar al carrito
  agregarCarrito(producto: any) {
    const productoAñadido = this.carrito.find(
      (item) => item.id === producto.id
    );
    if (productoAñadido) {
      this.productoAgregado();
    } else {
      this.carrito.push({ ...producto });
    }
  }

  //Eliminar del carrito
  eliminarDelCarrito(productoId: number) {
    this.carrito = this.carrito.filter(
      (producto) => producto.id !== productoId
    );
  }

  //Vaciar carrito para simular la compra
  async comprar() {
    const desicion = await this.compraRealizada();
    if (desicion === true) {
      this.carritoComprado = [...this.carritoComprado, ...this.carrito];
      this.carrito = [];
    } else {
      console.log('No');
    }
  }

  //Obtener suma de los productos unitario
  sumaCarritoUnitario() {
    return this.carrito.reduce(
      (totalUnitario: number, producto) => totalUnitario + producto.precio,
      0
    );
  }

  //Obtener suma del Iva
  sumCarritoIva() {
    return this.carrito.reduce(
      (totalIva: number, producto) => totalIva + producto.iva,
      0
    );
  }

  //Obtener suma total
  sumCarritoTotal() {
    return this.carrito.reduce(
      (total: number, producto) => total + producto.iva + producto.precio,
      0
    );
  }

  //Obtener suma del unitario de los productos comprados
  sumaCarritoUnitarioComprado() {
    return this.carritoComprado.reduce(
      (totalUnitario: number, producto) => totalUnitario + producto.precio,
      0
    );
  }

  //Obtener suma del Iva de los productos comprados
  sumCarritoIvaComplado() {
    return this.carritoComprado.reduce(
      (totalIva: number, producto) => totalIva + producto.iva,
      0
    );
  }

  //Obtener suma total de los productos comprados
  sumaCarritoComplado() {
    return this.carritoComprado.reduce(
      (total: number, producto) => total + producto.iva + producto.precio,
      0
    );
  }

  //Vaciar las compras realizadas
  vaciarCarritoComplado() {
    return (this.carritoComprado = []);
  }
}
