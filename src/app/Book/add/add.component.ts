import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private service: ServiceService) {
    this.form = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      read: new FormControl(false)
    });
  }

  ngOnInit(): void {
  }

  async create() {

    try {
      const response = await this.service.createBook(this.form.value);
      alert("Book added successfully")
      this.router.navigate(["list"]);

    } catch (error) {
      console.log(error);
    }

  }

}
