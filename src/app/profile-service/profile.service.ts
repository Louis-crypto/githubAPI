import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const remoteUrl = 'https://api.github.com/users/Louis-crypto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  getProfileData(){
    return this.http.get(remoteUrl);
  }
}
