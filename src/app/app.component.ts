import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manu';
  showMovies: boolean = true;
  showList(): void {
    console.log('pouet');
    this.showMovies = !this.showMovies;
  }
}
