import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.sass']
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor( private auth: AuthService ) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
}

