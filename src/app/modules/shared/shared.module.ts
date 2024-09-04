import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import {
  featherAirplay,
  featherCheckSquare,
  featherArrowUpRight,
  featherStar,
} from '@ng-icons/feather-icons';
import {bootstrapStar,bootstrapStarFill} from '@ng-icons/bootstrap-icons'
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      featherAirplay,
      featherCheckSquare,
      featherArrowUpRight,
      featherStar,
      heroUsers,
      bootstrapStar,
      bootstrapStarFill
    }),
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NgIconsModule],
})
export class SharedModule {}
