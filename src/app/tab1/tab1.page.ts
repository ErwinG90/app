import { Component } from '@angular/core';
import { ServicioComidaService } from '../services/servicio-comida.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private ServicioComida:ServicioComidaService) {}

  cargarCategorias(){
    // categorias = this.ServicioComida.getCategorias()
  }


}
