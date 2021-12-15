import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiURL:any = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(public http:HttpClient) {}

  getPokemon(nombre){
    return this.http.get(this.apiURL+nombre);
  }

  // createPost(post){
  //   this.http.post(this.apiURL+'/post',post,this.HttpOptions).pipe
  // }
}
