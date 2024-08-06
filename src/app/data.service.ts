import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DataModel } from './data-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private contacts: DataModel[] = [];
  private sessionStorageKey = 'contacts';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const storedContacts = sessionStorage.getItem(this.sessionStorageKey);
      if (storedContacts) {
        this.contacts = JSON.parse(storedContacts);
      }
    }
  }

  private updateSessionStorage() {
    if (this.isBrowser) {
      sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(this.contacts));
    }
  }

  storeContact(contactData: DataModel) {
    this.contacts.push(contactData);
    this.updateSessionStorage();
  }

  getContacts() {
    return this.contacts;
  }

  checkIfExists(email: string, phoneNumber: string): boolean {
    return this.contacts.some(
      (contact) =>
        contact.email === email || contact.phoneNumber === phoneNumber
    );
  }
}
