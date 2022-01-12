import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  selectItemSubject = new Subject<Cv>();
  constructor() {
    this.cvs = [
      new Cv(1,'sellaouti', 'aymen', 'teacher', '      ', '1234', 39),
      new Cv(2,'drira', 'ahmed', 'Dev', '', '12345', 20),
      new Cv(3,'Ben Hlima', 'amal', 'Dev', 'rotating_card_profile.png', '1234', 19),
      new Cv(4,'Ben Hlima', 'amal', 'Dev', 'rotating_card_profile.png', '1234', 19),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
  deleteCv(cv: Cv | null): boolean {
    if (cv) {
      const index = this.cvs.indexOf(cv);
      if (index > -1) {
        this.cvs.splice(index, 1);
        return true;
      }
    }
    return false;
  }
  getCvById(id: number): Cv | null {
    return (this.cvs.find((cv) => cv.id === id) ?? null);
  }

  selectCv(cv: Cv): void {
    this.selectItemSubject.next(cv);
  }
}
