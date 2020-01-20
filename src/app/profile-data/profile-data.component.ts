import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile-service/profile.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  username: any;
  user;
  constructor(private route: ActivatedRoute, private userService: ProfileService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params.username;
      this.userService
          .getUser(username)
          .subscribe(response =>{
              this.user = response;
              console.log(this.user);
          })
    });
  }

}
