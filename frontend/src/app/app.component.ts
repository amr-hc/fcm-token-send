import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { getMessaging, getToken } from '@angular/fire/messaging';

import {Auth, sendPasswordResetEmail, signOut} from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectt';

  constructor(private auth: Auth) { }

  ngOnInit() {
    this.logFCMToken();
  }

  private async logFCMToken() {
    console.log("d");
    const messaging = getMessaging();
    try {
      const token = await getToken(messaging, { vapidKey: 'BOW7yrEJOS_yluFin2fZDSOuwC7XbAvTtq6BxMZUedwqqHjb9EDi92RH4zJt5HwW1vlwWoZFD0-U_-pAcBuMZn0' });
      console.log('FCM Token:', token);
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  }


}
