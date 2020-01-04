import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  backgroundColor = environment.navBarBackgroundColor;
  constructor(public authService: AuthService) { }
  currentUser = '';
  ngOnInit() {
    this.currentUser = this.authService.getUser();
  }

}
