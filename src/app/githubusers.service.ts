import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubusersService {

  constructor(private http: HttpClient) { }

  searchUser(data)
  {
    const serchText='ab';
    return this.http.get('https://api.github.com/search/users?q='+data)
  }
}
