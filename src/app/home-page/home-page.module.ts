import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [PhotoGalleryComponent, MainPageComponent],
  imports: [CommonModule],
})
export class HomePageModule {}
