import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Generator } from '../models/generator.model';
import {HttpHeaders} from '@angular/common/http';

const baseUrl = 'https://devtest.bluedrive.io/api/v1/devtest';
const token = 'd8efa5fb05336cda75b731ec67e375d28d092ceb';
@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  getHeaders() {
  
    const reHeader = new HttpHeaders({
      Authorization: `Token ${token}`,
    });

    return reHeader;
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Generator> {
    const authHeaders = this.getHeaders();
    console.log(authHeaders)
    return this.http.get(`${baseUrl}/randominteger/`, {headers: authHeaders});
  }

  getAllNext(): Observable<Generator> {
    const authHeaders = this.getHeaders();
    const nextPage = sessionStorage.getItem("next")
    return this.http.get(`${nextPage}`, {headers: authHeaders});
  }

  getAllPrev(): Observable<Generator> {
    const authHeaders = this.getHeaders();
    const prevPage = sessionStorage.getItem("prev")
    return this.http.get(`${prevPage}`, {headers: authHeaders});
  }

  generate(){
    const authHeaders = this.getHeaders();
    return this.http.get(`${baseUrl}/randominteger/generate/`,{headers: authHeaders});
  }

}
