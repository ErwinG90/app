import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioComidaService {

  constructor(private HttpClient:HttpClient) {}


    getCategorias(){
      return this.HttpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    }

  
}