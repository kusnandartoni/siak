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
    let headers = this._getHeaders()
    return this.http.post(`${this.apiUrl}/artikel/create.php`,data,{headers:headers})
      .map(res=>res.json());
  }

  removeArtikel(id:string){
    return this.http.get(`${this.apiUrl}/artikel/delete.php?id=${id}`)
      .map(res=>res.json());
  }

  getListSiswa(){
    return this.http.get(`${this.apiUrl}/siswa/read.php`)
      .map(res=>res.json().records);
  }

  getSiswa(nisn:string){
    return this.http.get(`${this.apiUrl}/siswa/read_one.php?nisn=${nisn}`)
      .map(res=>res.json());
  }

  addSiswa(data){
    console.log('api',data);
    let headers = this._getHeaders()
    return this.http.post(`${this.apiUrl}/siswa/create.php`,data,{headers:headers})
      .map(res=>res.json());
  }
  updateSiswa(data){
    let headers = this._getHeaders()
    return this.http.post(`${this.apiUrl}/siswa/half_update.php`,data,{headers:headers})
      .map(res=>res.json());
  }
  removeSiswa(nisn:string){
    return this.http.get(`${this.apiUrl}/siswa/delete.php?nisn=${nisn}`)
      .map(res=>res.json());
  }

}
