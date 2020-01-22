import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
repos: any;
baseUrl: string = 'https://api.github.com/user';
accessToken: string = 'b8f4d2cf8e68cfc85279a259af32ade17dbce79d';
  constructor(private http: HttpClient) { }


  ngOnInit() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}/repos`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
      }).toPromise().then(response => {
            this.repos = response;
            resolve();
      },error => {
        reject(error);
      });
    });
    return promise;
  }
}