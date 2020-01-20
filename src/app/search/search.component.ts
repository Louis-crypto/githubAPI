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

users: any;
q: string;
  constructor(private http: HttpClient) { }


  userSearch() {

    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.searchUrl}users?q=${this.q}+repos:%3E15+followers:%3E0`, {
          headers: {
            Authorization: `Bearer ${environment.accessToken}`
          }
      }).toPromise().then(response => {

            this.users = response['items'];
          //  console.log(this.repos.id);
            console.log(response);
            //console.log(this.q);
            resolve();
      },
      error => {
        console.log('This isn\'t working');
        reject(error);
      });
    });
    return promise;
  }

  ngOnInit() {
  }

}
