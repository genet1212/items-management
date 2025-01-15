import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'items-management';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  userName?: string;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.storageService.getToken();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showModeratorBoard = this.roles.includes('MODERATOR');

      this.userName = user.userName;
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}