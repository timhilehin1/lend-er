import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherAirplay, featherCheckSquare, featherArrowUpRight } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,  NgIconsModule.withIcons({ featherAirplay, featherCheckSquare, featherArrowUpRight, heroUsers }),],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,  NgIconsModule,],
 
})
export class SharedModule {}
