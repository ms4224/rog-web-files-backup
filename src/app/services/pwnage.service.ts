import { Injectable } from '../components/current-enemy/node_modules/@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PwnageService {
  httpOptions;
  heroku_path: string = 'SECRET!!!! Removing this for public github repo';
  local_path: string = 'Removing this for public github repo';

  test(): string {
    return 'pwnage test succesful';
  }

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getCurrentlyPwning() {
    return this.httpClient.get(this.heroku_path + "/enemydata/current");
  }

  getAllEnemies() {
    return this.httpClient.get(this.heroku_path + "/enemydata/all");
  }

  postNewScore(name: string, wins: number, losses: number, sd: number, plus5: number) {
    var pathstring: string = name + '/' + wins.toString() + '/' + losses.toString() + '/' + sd.toString() + '/' + plus5.toString();
    pathstring = 'REMOVING THIS FOR PUBLIC GITHUB' + pathstring;
    return this.httpClient.post(pathstring, "REMOVING THIS FOR PUBLIC GITHUB", this.httpOptions);
  }



  // basic implementation (pivot is the first element of the array)
  quicksortBasic(array) {
    if (array.length < 2) {
      return array;
    }

    var pivot = array[0];
    var lesser = [];
    var greater = [];

    for (var i = 1; i < array.length; i++) {
      if (array[i].win_ratio < pivot.win_ratio) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }

    return this.quicksortBasic(lesser).concat(pivot, this.quicksortBasic(greater));
  }

}
