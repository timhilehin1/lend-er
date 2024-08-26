import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  activeTab: string = 'table';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
