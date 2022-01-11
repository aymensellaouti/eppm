import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  color = 'blue';
  font = 'verdana';
  size = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
