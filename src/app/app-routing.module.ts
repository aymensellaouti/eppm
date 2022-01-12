import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {WordComponent} from "./directives/word/word.component";
import {FirstComponent} from "./components/first/first.component";
import {DetailsCvComponent} from "./cv/details-cv/details-cv.component";
import {SecondComponent} from "./components/second/second.component";
import {NF404Component} from "./components/nf404/nf404.component";

const routes: Routes = [
 // blabla/a
  {path: '', component: FirstComponent},
  {path: 'cv', component: CvComponent},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: WordComponent},
  {path: ':ahmed', component: SecondComponent},
  {path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
