import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { PhotoGalleryComponent } from './home-page/photo-gallery/photo-gallery.component';

const routes: Routes = [
  { path: '', component: PhotoGalleryComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
