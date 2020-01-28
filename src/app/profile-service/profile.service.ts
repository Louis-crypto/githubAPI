import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repo } from '../repo';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User;
  repo: any;
  baseUrl: string = 'https://api.github.com/user';
  remoteUrl: string = 'https://api.github.com/users/';
  accessToken: string = 'b8f4d2cf8e68cfc85279a259af32ade17dbce79d';
  constructor(private http: HttpClient) {
    this.user = new User('', '');


  }

  userRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }).toPromise().then(response => {
        this.user.login = response.login;
        this.user.avatarUrl = response.avatar_url;
        resolve();
      },
        error => {
          reject(error);
        });
    });
    return promise;

  }

  getUser(username: string) {
    return this.http.get(`${this.remoteUrl}${username}/repos`);
  }
}

