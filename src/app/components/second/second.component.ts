import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works!
    </p>
  `,
  styles: [`
    h1{
      color: blueviolet;
    }
  `
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
