import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  serchResult;
  constructor(public http:HttpClient) {



   }
   public fetchGithubUserDetails()
   {
     const serchText='ab';
    return this.http.get('https://api.github.com/search/users?q='+serchText)

   }
}
