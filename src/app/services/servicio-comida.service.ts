import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categorias } from '../interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class ServicioComidaService {

  constructor(private HttpClient:HttpClient) {}


    getCategorias(){
      return this.HttpClient.get<Categorias>('https://www.themealdb.com/api/json/v1/1/categories.php')
    }

  
}