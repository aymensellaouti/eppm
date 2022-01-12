import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { UsdToBtcPipe } from './pipes/usd-to-btc.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { NF404Component } from './components/nf404/nf404.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    NgStyleComponent,
    WordComponent,
    LampeComponent,
    HighlightDirective,
    RainbowDirective,
    UsdToBtcPipe,
    DefaultImagePipe,
    TodoComponent,
    NavbarComponent,
    DetailsCvComponent,
    EmbaucheComponent,
    AddCvComponent,
    NF404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      // positionClass: 'toast-bottom-left',
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
