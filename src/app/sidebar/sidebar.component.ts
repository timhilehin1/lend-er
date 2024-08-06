import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isSidebarClosed: boolean = false;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router) {}
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
