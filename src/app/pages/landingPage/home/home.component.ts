import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { HeroComponent } from '../hero/hero.component';
import { LicenceComponent } from '../licence/licence.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { WhyUsComponent } from '../why-us/why-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, LicenceComponent, WhyUsComponent, ReviewsComponent, GetStartedComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
