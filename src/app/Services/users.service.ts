import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate, ResponseUsers } from '../Models/userModel';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "https://reqres.in/api/users?page=2"



  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);


  }
  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }
}
