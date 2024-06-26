import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  // baseUrl: string = "http://localhost:5000/api/";
  baseUrl: string = "https://code-myblog.somee.com/api/";

  constructor(private http: HttpClient) { }
  
  get(url: string) {
    const headers = { 'Content-Type': 'application/json' }; 
    return this.http.get(this.baseUrl + url, {headers});
  }

  post(url: string, data:any) {
    return this.http.post(this.baseUrl + url, data);
  }
}

export interface ResponseModel {
  ResponseBody?: any,
  StatusCode?: number,
  StatusMessage?: string
}