import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PayloadResponse } from '../shared/model/payloadResponse.model';
import { Sorteio } from '../shared/model/sorteio.model';

@Injectable({ providedIn: 'root'})
export class SorteadorService {

  private URL_BASE: string = 'http://localhost:8080/sorteador';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    })
  }

  constructor(private http: HttpClient) {}

  getSorteio(bean: Sorteio): Observable<PayloadResponse<string[]>> {
    return this.http.post<PayloadResponse<string[]>>(this.URL_BASE + '/sortear', bean);
  }

}