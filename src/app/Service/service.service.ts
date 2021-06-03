import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from '../Model/Book';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:5000/api'

  getBooks() {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  /* createBook(newBook: Book) {
    return this.http.post<Book>(`${this.baseUrl}/book`, newBook);
  } */

  createBook({ title, author, read }: { title: string, author: string, read: boolean }): Promise<any> {
    const bodyRequest = { title, author, read };
    return this.http.post<any>(`${this.baseUrl}/book`, bodyRequest).toPromise();
  }

  getBookID(id: string | any) {
    return this.http.get<Book>(`${this.baseUrl}/book/${id}`);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${this.baseUrl}/book`, book);
  }

  deleteBook(book: Book) {
    return this.http.delete<Book>(`${this.baseUrl}/book/${book.id}`)
  }
}
