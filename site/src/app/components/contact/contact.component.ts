import { ContactFormData } from './../../models/contact-form-data.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Output()
  public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  public formData: ContactFormData = {
    email: "",
    message: ""
  }

  public submitForm(): void {
    alert('clicou');
    console.log(this.formData);
  }

  ngOnInit(): void {
    this.elementCreated.emit('contact');
  }
}
