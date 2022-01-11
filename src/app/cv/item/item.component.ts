import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Output() selectCv= new EventEmitter<Cv | null>();
  constructor() { }

  ngOnInit(): void {
  }

  selectItem() {
    this.selectCv.emit(this.cv);
  }
}
