import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauchees: Cv[] = [];
  constructor() { }
  embaucher(cv: Cv | null): boolean {
    if (cv) {
      const index = this.embauchees.indexOf(cv);
      if(index == -1) {
        this.embauchees.push(cv);
        return true;
      }
    }
    return false;
  }
  getEmbauchees(): Cv[] {
    return this.embauchees;
  }
}
