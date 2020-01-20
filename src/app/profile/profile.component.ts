import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;


  constructor(private userService: ProfileService) { }

  ngOnInit() {
    this.userService.userRequest();
    this.user = this.userService.user;

    // this.userService.repoRequest();
    // this.repos = this.userService.repos;
  }

}


