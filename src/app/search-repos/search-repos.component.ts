import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {
repos: any;
set: string;
baseUrl: string = 'https://api.github.com/search/';
accessToken: string = 'b8f4d2cf8e68cfc85279a259af32ade17dbce79d';

  constructor(private http: HttpClient) { }

  findRepo() {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      created_at: Date;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`${this.baseUrl}repositories?q=${this.set}+language:javascript&sort=stars&order=desc`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
      }).toPromise().then(response => {

            this.repos = response['items'];
            resolve();
      },
      error => {
        console.log('something is wrong');
        reject(error);
      });
    });
    return promise;
  }

  ngOnInit() {
  }

}