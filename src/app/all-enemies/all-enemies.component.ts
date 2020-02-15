import { Component, OnInit } from '@angular/core';
import { PwnageService } from '../pwnage.service';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-all-enemies',
  templateUrl: './all-enemies.component.html',
  styleUrls: ['./all-enemies.component.css']
})
export class AllEnemiesComponent implements OnInit {

  enemies;
  color(ratio: number): string{
    return this.colorsService.getColor2(ratio);
  }

  constructor(private pwnageService: PwnageService, private colorsService: ColorsService) { }

  ngOnInit() {
     this.pwnageService.getAllEnemies().subscribe(data =>{
       this.enemies = data;
       this.enemies = this.pwnageService.quicksortBasic(data);
       console.log(this.enemies);
     })
  }



}
