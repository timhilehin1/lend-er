import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/landingPage/navbar/navbar.component';
import { HeroComponent } from './pages/landingPage/hero/hero.component';
import { LicenceComponent } from './pages/landingPage/licence/licence.component';
import { WhyUsComponent } from './pages/landingPage/why-us/why-us.component';
import { ReviewsComponent } from './pages/landingPage/reviews/reviews.component';
import { GetStartedComponent } from './pages/landingPage/get-started/get-started.component';
import { FooterComponent } from './pages/landingPage/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, LicenceComponent, WhyUsComponent, ReviewsComponent, GetStartedComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lend-er';
}
