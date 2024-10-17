import { Component } from '@angular/core';
import { HomePageComponent } from './gifs/pages/home/home-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HomePageComponent, SidebarComponent],
})
export class AppComponent {
  title = 'gifs-app';
}
