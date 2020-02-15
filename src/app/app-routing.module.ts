import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CurrentEnemyComponent } from './components/current-enemy/current-enemy.component';
import { AllEnemiesComponent } from './components/all-enemies/all-enemies.component';
import { TwitchComponent } from './components/twitch/twitch.component';
import { ChatOnlyComponent } from './components/chat-only/chat-only.component';
import { RogConsoleComponent } from './components/rog-console/rog-console.component';

const routes: Routes = [
  { path: 'currentlypwning', component: CurrentEnemyComponent },
  { path: 'allenemies', component: AllEnemiesComponent },
  { path: 'twitch', component: TwitchComponent},
  { path: 'twitchchatonly', component: ChatOnlyComponent},
  { path: 'secret', component: RogConsoleComponent },
  { path: '**', redirectTo: '/currentlypwning', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
