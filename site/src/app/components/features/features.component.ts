import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureSectionData } from 'src/app/models/feature-section-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit{

  @Input()
  public featureData!: FeatureSectionData

  @Output()
  public elementCreated: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.elementCreated.emit('feature')
  }
}
