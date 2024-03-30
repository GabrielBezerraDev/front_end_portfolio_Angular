import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { body } from '../shared/utils/document-utils';

@Injectable({
  providedIn: 'root'
})
export class HttpService{
private urlDefault: string = "localhost:3000/api/";

constructor(private http: HttpClient) { }

public get<T>(url:string):Observable<T>{
  return this.http.get<T>(`${this.urlDefault}${url}`);
}

public post<T,U>(url:string, body: U):Observable<T>{
  return this.http.post<T>(`${this.urlDefault}${url}`, body);
}

public delete<T>(url:string):Observable<T>{
  return this.http.delete<T>(`${this.urlDefault}${url}`);
}

public put<T,U>(url:string, body:U):Observable<T>{
  return this.http.put<T>(`${this.urlDefault}${url}`,body);
}

public patch<T,U>(url:string,body:U):Observable<T>{
  return this.http.patch<T>(`${this.urlDefault}${url}`, body);
}

}
