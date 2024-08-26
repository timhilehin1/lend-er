import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay, featherArrowUpRight } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ featherArrowUpRight, heroUsers })],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  heroImage : string = '../../../assets/images/HeroIllustration.png';
}
