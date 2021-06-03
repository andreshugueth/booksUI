import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  singleBook: Book;

  constructor(private router: Router, private service: ServiceService) {
    this.singleBook = new Book();
  }

  ngOnInit(): void {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getBookID(id)
      .subscribe(data => {
        this.singleBook = data;
      })
  }

  update(book: Book) {
    this.service.updateBook(book)
      .subscribe(data => {
        this.singleBook = data;
        alert("Book updated successfully");
        this.router.navigate(["list"]);
      })
  }
}
