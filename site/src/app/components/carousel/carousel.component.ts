import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Output()
  public elementCreated: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.elementCreated.emit('carousel');
  }

}
