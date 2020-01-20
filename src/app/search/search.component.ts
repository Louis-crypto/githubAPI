import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any;
  tes: string;

  findProfile() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.searchUrl}users?q=${this.tes}+repos:%3E15+followers:%3E0`, {
          headers: {
            Authorization: `Bearer ${environment.accessToken}`
          }
      }).toPromise().then(response => {
            this.users = response['items'];
            console.log(response);
            resolve();
      },
      error => {
        console.log('Something went wrong');
        reject(error);
      });
    });
    return promise;
  }
  ngOnInit() { }
}
