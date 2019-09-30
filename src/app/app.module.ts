import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';
import {TabService} from './tab.service';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MenuComponent,
    MoviesComponent,
    SongsComponent,
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
