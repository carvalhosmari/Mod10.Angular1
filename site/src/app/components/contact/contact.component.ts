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

  @Output()
  public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();

  public formData: ContactFormData = {
    email: "",
    message: ""
  }

  public submitForm(): void {
    this.sendForm.emit(this.formData);
  }

  ngOnInit(): void {
    this.elementCreated.emit('contact');
  }
}
