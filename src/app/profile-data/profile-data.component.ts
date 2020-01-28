import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile-service/profile.service';

@Component({
  selector: 'app-profile-d',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  username: any;
  user;
  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params.username;
      this.profileService
        .getUser(username)
        .subscribe(response => {
        this.user = response;
        })
    });
  }

}
