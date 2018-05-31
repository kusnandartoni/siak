import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  apiUrl: string = 'http://localhost/api'

  constructor(public http: Http) {
    // console.log('Hello ApiProvider Provider');
  }
  _getHeaders() {
    let headers = new Headers();    
    headers.append('Content-Type', 'x-www-form-urlencoded');
    return headers;
  }

  getDataSekolah(){
    return this.http.get(`${this.apiUrl}/sekolah/read_one.php`)
      .map(res=>res.json());
  }

  saveDataSekolah(data){
    let headers = this._getHeaders()
    return this.http.post(`${this.apiUrl}/sekolah/update.php`,data,{headers:headers})
      .map(res=>res.json());
  }

  getArtikelAll(){
    return this.http.get(`${this.apiUrl}/artikel/read.php`)
      .map(res=>res.json().records);
  }

  getArtikel(id:string){
    return this.http.get(`${this.apiUrl}/artikel/read_one.php?id=${id}`)
      .map(res=>res.json());
  }

  updateArtikel(data){
    let headers = this._getHeaders()
    return this.http.post(`${this.apiUrl}/artikel/update.php`,data,{headers:headers})
      .map(res=>res.json());
  }

  addArtikel(data){
    console.log('api')
    let headers = this._getHeaders()
    return this.http.post(`${this.apiUrl}/artikel/create.php`,data,{headers:headers})
      .map(res=>res.json());
  }

}
