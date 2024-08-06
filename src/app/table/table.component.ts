import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DataModel } from '../data-model';
import { NgFor, NgIf } from '@angular/common';
import { singleAddress } from '../data-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf, ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  tableData: DataModel[] = [];
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.tableData = this.dataService.getContacts();
  }

  addContact() {
    this.router.navigate(['/add-contact']);
  }


  getRandomAddress(addresses: any[]): string {
    if (!addresses || addresses.length === 0) {
      return '--';
    }
    const randomIndex = Math.floor(
      Math.random() * Math.min(5, addresses.length)
    );
    return addresses[randomIndex]?.address || '--';
  }
}
