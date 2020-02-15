import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PwnageService } from './pwnage.service';
import { CurrentEnemyComponent } from './current-enemy/current-enemy.component';
import { AppRoutingModule } from './/app-routing.module';
import {ColorsService} from './colors.service';
import { AllEnemiesComponent } from './all-enemies/all-enemies.component';
import { PicturesComponent } from './pictures/pictures.component';
import { TwitchComponent } from './twitch/twitch.component';
import { BannerComponent } from './banner/banner.component';
import { ChatOnlyComponent } from './chat-only/chat-only.component';
import { UpdaterService } from './updater.service';
import { RogConsoleComponent } from './rog-console/rog-console.component';
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
