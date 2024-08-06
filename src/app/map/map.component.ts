import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataModel } from '../data-model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  tableData: DataModel[] = [];
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.tableData = this.dataService.getContacts();
  }

  addContact() {
    this.router.navigate(['/add-contact']);
  }
}
