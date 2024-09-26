import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import {
  featherAirplay,
  featherCheckSquare,
  featherArrowUpRight,
  featherStar,
} from '@ng-icons/feather-icons';
import {
  bootstrapStar,
  bootstrapStarFill,
  bootstrapPersonLinesFill,
} from '@ng-icons/bootstrap-icons';
import {
  heroUsers,
  heroHomeModern,
  heroArrowLeft,
  heroEyeSlash,
  heroEye,
  heroRocketLaunch
} from '@ng-icons/heroicons/outline';
import { matArrowForwardIosOutline, matHouseOutline } from '@ng-icons/material-icons/outline';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIconsModule.withIcons({
      featherAirplay,
      featherCheckSquare,
      featherArrowUpRight,
      featherStar,
      heroUsers,
      bootstrapStar,
      bootstrapStarFill,
      bootstrapPersonLinesFill,
      heroHomeModern,
      heroArrowLeft,
      heroEyeSlash,
      heroRocketLaunch,
      heroEye,
      matHouseOutline,
      matArrowForwardIosOutline,
      
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule,
    RouterLink,
    CurrencyPipe
  ],
})
export class SharedModule {}
