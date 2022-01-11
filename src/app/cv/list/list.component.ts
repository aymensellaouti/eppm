import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [
    new Cv(1,'sellaouti', 'aymen', 'teacher', '      ', '1234', 39),
    new Cv(2,'drira', 'ahmed', 'Dev', '', '12345', 20),
    new Cv(3,'Ben Hlima', 'amal', 'Dev', 'rotating_card_profile.png', '1234', 19),
    new Cv(4,'Ben Hlima', 'amal', 'Dev', 'rotating_card_profile.png', '1234', 19),
  ];
  @Output() forwardSelectedCv = new EventEmitter<Cv | null>();
  constructor() { }

  ngOnInit(): void {
  }

  forwardCv(cv: Cv | null) {
    this.forwardSelectedCv.emit(cv);
  }
}
