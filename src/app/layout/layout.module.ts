import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FooterComponent, NavBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [FooterComponent, NavBarComponent],
})
export class LayoutModule {}
