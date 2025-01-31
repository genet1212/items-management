import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}

