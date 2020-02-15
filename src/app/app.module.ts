import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PwnageService } from './services/pwnage.service';
import { CurrentEnemyComponent } from './components/current-enemy/current-enemy.component';
import { AppRoutingModule } from './/app-routing.module';
import {ColorsService} from './services/colors.service';
import { AllEnemiesComponent } from './components/all-enemies/all-enemies.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { TwitchComponent } from './components/twitch/twitch.component';
import { BannerComponent } from './components/banner/banner.component';
import { ChatOnlyComponent } from './components/chat-only/chat-only.component';
import { UpdaterService } from './services/updater.service';
import { RogConsoleComponent } from './components/rog-console/rog-console.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CurrentEnemyComponent,
    AllEnemiesComponent,
    PicturesComponent,
    TwitchComponent,
    BannerComponent,
    ChatOnlyComponent,
    RogConsoleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PwnageService, HttpClientModule, ColorsService, UpdaterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
