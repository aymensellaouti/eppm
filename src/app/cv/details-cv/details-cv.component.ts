import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ROUTES} from "../../config/router.config";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cv = this.cvService.getCvById(+params['id']);
        if (!this.cv) {
          this.router.navigate([ROUTES.cv]);
        }
      }
    )
  }

  deleteCv() {
    if (this.cvService.deleteCv(this.cv)) {
      this.router.navigate([ROUTES.cv]);
      this.toaster.success(`Suppression effectuée avec succès`);
    } else {
      this.toaster.error(`Problème serveur veuillez contactetr l'admin`);
    }
  }
}
