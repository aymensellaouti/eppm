import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'first component';
  doNotshowP = true;
  btnMessage = 'show';
  constructor() { }

  ngOnInit(): void {
    // setInterval(
    //   () => {
    //     this.doNotshowP = !this.doNotshowP;
    //   }, 1500
    // );
  }
  showHide() {
    this.doNotshowP = !this.doNotshowP;
    this.btnMessage == 'show' ? this.btnMessage = 'hide' :  this.btnMessage = 'show';
  }

  afficher(message: string) {
    console.log(message)
  }
}
