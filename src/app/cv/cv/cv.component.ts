import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {SayHelloService} from "../../services/say-hello.service";
import {TodoService} from "../../todo/service/todo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  date = new Date();
  selectedCv: Cv | null = null;
  constructor(
    private loggerService: LoggerService,
    private hello: SayHelloService,
    private todoService: TodoService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.hello.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toaster.info('Binevenu chez votre CvTech');
  }

  selectCv(cv: Cv | null) {
    this.selectedCv = cv;
    this.todoService.loggerTodos();
  }
}
