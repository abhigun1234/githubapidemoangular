import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddmenuService {
  headers: Headers;
  options: RequestOptions;
  
  constructor(public http: HttpClient) { }

//   public addDataInRestaurentMenu(url: string, param: any): Observable <any> {
//     const body = JSON.stringify(param);
//       return this.http
//           .post(url, body, this.options)
//           .map(
//             res => {
//               alert(res);
//              /* const data = res.json();
//               console.log(data);
//               return data;*/

//             }
//           );
// }
}
