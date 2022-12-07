import { AddressData } from './../../models/address-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  public addressData!: AddressSectionData

  @Output()
  public elementCreated: EventEmitter<string> = new EventEmitter<string>()

  // public addressData: AddressData = {
  //   street: "Av. João Café Filho",
  //   number: 2190,
  //   complement: " apartamento xyz",
  //   state: "SP",
  //   city: "São Bernardo do Campo",
  //   district: "Bairro dos Casas",
  //   zipCode: "xpto-000"
  // }

  ngOnInit(): void {
    this.elementCreated.emit('address')
  }
}
