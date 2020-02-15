import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UpdaterService {
  httpOptions;
  heroku_path: string = 'SECRET!! REMOVING THIS FOR PUBLIC GITHUB';
  local_path: string ='REMOVING THIS FOR PUBLIC GITHUB';

  constructor(private httpClient: HttpClient) {
    
   }

   sendUpdate(enemy: string, wins: number, losses: number, sd: number, plusfive: number) {
     console.log('sending....')
      return this.httpClient.post(this.heroku_path+'REMOVING THIS FOR PUBLIC GITHUB', {enemy: enemy, wins: wins, losses: losses, sd: sd, plusfive: plusfive});
   }

   sendUpdateCurrentEnemy(enemy:string){
     console.log('sending update for current enemy...');
     return this.httpClient.post(this.heroku_path+'REMOVING THIS FOR PUBLIC GITHUB', {enemy: enemy});
   }

   sendSecret(secret1: string, secret2: string){
     console.log('sending secrets...');
     return this.httpClient.post(this.heroku_path+'REMOVING THIS FOR PUBLIC GITHUB', {secret1: secret1, secret2: secret2});
   }

}
