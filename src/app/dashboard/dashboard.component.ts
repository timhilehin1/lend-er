import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { TableComponent } from '../table/table.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MapComponent, TableComponent, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  activeTab: string = 'table';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
