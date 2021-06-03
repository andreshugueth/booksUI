import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrBooks: Book[];

  constructor(private service: ServiceService, private router: Router) {
    this.arrBooks = [];
  }

  ngOnInit(): void {
    this.service.getBooks()
      .subscribe(data => {
        this.arrBooks = data;
      });

  }

  Edit(book: Book): void {
    localStorage.setItem("id", book.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(book: Book) {
    this.service.deleteBook(book)
      .subscribe(data => {
        this.arrBooks = this.arrBooks.filter(b => b.id !== book.id);
        alert("Book deleted");
      })
  }

}
