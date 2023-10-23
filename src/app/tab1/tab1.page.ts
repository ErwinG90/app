import { Component, OnInit } from '@angular/core';
import { ServicioComidaService } from '../services/servicio-comida.service';
import { Categorias,Categoria } from '../interfaces/comidas';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  categorias:Categoria[]=[];

  constructor(private ServicioComida:ServicioComidaService) {}

  cargarCategorias(){
    // categorias = this.ServicioComida.getCategorias()
  }

  ngOnInit(): void {

    this.ServicioComida.getCategorias().subscribe(datos=>{
      // console.log(datos.categories);
      this.categorias.push(...datos.categories);
      console.log(this.categorias)
    })
    

      console.log('hi')
  }

}
