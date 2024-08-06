import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.minLength(11), Validators.maxLength(11)]
      ],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array(
        [this.createAddressGroup()],
        [Validators.minLength(1), Validators.maxLength(5)]
      ),
      longitude: [{ value: '', disabled: true }],
      latitude: [{ value: '', disabled: true }],
    });
  }

  get addresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      address: ['', Validators.required],
    });
  }

  addAddress() {
    if (this.addresses.length < 5) {
      this.addresses.push(this.createAddressGroup());
    }
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }
  async onSubmit() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid && this.addresses.length > 0) {
      const email = this.contactForm.get('email')?.value;
      const phoneNumber = this.contactForm.get('phoneNumber')?.value;

      if (this.dataService.checkIfExists(email, phoneNumber)) {
        alert(
          'Email or phone number already exists. Please enter a new email or phone number.'
        );
        return;
      }

      try {
        const position = await this.getCurrentLocation();
        this.contactForm.patchValue({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      } catch (error) {
        alert('Error getting location:');
      }
      const formValue = {
        ...this.contactForm.getRawValue(),
        longitude: this.contactForm.get('longitude')?.value,
        latitude: this.contactForm.get('latitude')?.value,
      };

      this.dataService.storeContact(formValue);
      console.log(formValue);
      this.contactForm.reset();
      while (this.addresses.length !== 0) {
        this.addresses.removeAt(0);
      }
      this.addAddress();

      // Reset longitude and latitude
      this.contactForm.patchValue({
        longitude: '',
        latitude: '',
      });

      alert('Form Successfully submitted');
    } else {
      alert(
        'An error occurred. Ensure you fill all required fields and have at least one address before clicking submit.'
      );
    }
  }

  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
}
