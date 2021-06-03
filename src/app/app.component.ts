import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooksUI';

  constructor(private router: Router) { }

  list() {
    this.router.navigate(["list"]);
  }

  newBook() {
    this.router.navigate(['add']);
  }
}
