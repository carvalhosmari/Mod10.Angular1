import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  public elementCreated: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  public searchEvent: EventEmitter<string> = new EventEmitter<string>()

  public searchData!: string;


  ngOnInit(): void {
    this.elementCreated.emit('header')
  }

  public submitEvent(): void {
    this.searchEvent.emit(this.searchData)
  }

}
