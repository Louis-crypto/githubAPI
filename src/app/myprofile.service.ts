import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  private username: string;
  private userid:'4f5f44dfdbc4ae999801';
  private usersecret:'894ad411150950d99d47b1a0b35629c018cc4b43';

  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username = 'Louis-crypto';
   }
   getUserData(){
     return this.http.get('https://api.github.com/users/Louis-crypto');
   }
}
