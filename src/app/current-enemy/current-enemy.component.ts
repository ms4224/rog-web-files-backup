import { Component, OnInit } from '@angular/core';
import { PwnageService } from '../pwnage.service';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-current-enemy',
  templateUrl: './current-enemy.component.html',
  styleUrls: ['./current-enemy.component.css']
})
export class CurrentEnemyComponent implements OnInit {

  public enemy_data;
  public enemy = 'no enemy yet';
  public wins;
  public losses;
  public win_ratio = 0;
  public percent: string = this.win_ratio +'%';
  public color: string = 'green';
  public face_color: string = 'green';
  public suddendeath;
  public plusfive;
  

  constructor(private pwnageService: PwnageService, private colorsService: ColorsService) {
    // console.log(pwnageService);
   }

  ngOnInit() {
    this.Refresh();
  }

  Refresh(){
    console.log('refreshing....')
    setTimeout(()=>{
      this.pwnageService.getCurrentlyPwning().subscribe(
        data => {
          this.enemy_data = data;
          this.enemy = (data as any).enemy;
          this.wins = (data as any).wins;
          this.losses = (data as any).losses;
          this.win_ratio = (data as any).win_ratio;
          this.suddendeath = (data as any).suddendeath;
          this.plusfive = (data as any).plusfive;
          this.percent = this.win_ratio * 100 + '%';
          this.color = this.colorsService.getColor(this.win_ratio);
          this.face_color = this.colorsService.getColor3(this.win_ratio);
          // console.log(this.color);
          this.Refresh();
        }
      )
    }, 10000)
  }

}
