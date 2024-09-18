import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { heroUsers, heroHomeModern } from '@ng-icons/heroicons/outline';


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
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule,
    RouterLink,
  ],
})
export class SharedModule {}
