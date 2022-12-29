import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
    PhotoGalleryComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
