import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  getSessionData() {
    let sessionDataString: string | null = sessionStorage.getItem('auth');
    if (sessionDataString) {
      let sessionData: { createdPin: boolean } = JSON.parse(sessionDataString);
      return sessionData;
    }
    return null;
  }
}
