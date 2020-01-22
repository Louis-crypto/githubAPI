import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.userRequest();
    this.user = this.profileService.user;
  }

}


