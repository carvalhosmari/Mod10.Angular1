import { ContactFormData } from './../../models/contact-form-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public formData: ContactFormData = {
    email: "",
    message: ""
  }

  public submitForm(): void {
    alert('clicou')
    console.log(this.formData)
  }
}
