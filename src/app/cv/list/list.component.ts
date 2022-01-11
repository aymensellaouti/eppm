import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [
    new Cv(1,'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', '1234', 39),
    new Cv(2,'drira', 'ahmed', 'Dev', 'rotating_card_profile3.png', '12345', 20),
    new Cv(3,'Ben Hlima', 'amal', 'Dev', 'rotating_card_profile.png', '1234', 19),
  ];
  @Output() forwardSelectedCv = new EventEmitter<Cv | null>();
  constructor() { }

  ngOnInit(): void {
  }

  forwardCv(cv: Cv | null) {
    this.forwardSelectedCv.emit(cv);
  }
}
