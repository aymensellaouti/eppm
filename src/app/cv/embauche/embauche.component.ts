import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from "../services/embauche.service";
import {Cv} from "../model/cv";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauches: Cv[] = [];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauches = this.embaucheService.getEmbauchees();
  }

}
