import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AboutUsComponent,
    OurCoursesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'paginaColegio';
}
