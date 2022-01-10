import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Output() filsEvent =  new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendEvent(): void {
    this.filsEvent.emit('cc papa');
  }

}
