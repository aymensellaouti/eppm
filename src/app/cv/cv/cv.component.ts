import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  date = new Date();
  selectedCv: Cv | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  selectCv(cv: Cv | null) {
    this.selectedCv = cv;
  }
}
