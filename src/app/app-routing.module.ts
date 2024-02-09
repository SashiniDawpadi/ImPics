import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { PhotoGalleryComponent } from './home-page/photo-gallery/photo-gallery.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '', component: PhotoGalleryComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
