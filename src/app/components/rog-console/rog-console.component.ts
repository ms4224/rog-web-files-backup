import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdaterService } from '../../services/updater.service

@Component({
  selector: 'app-rog-console',
  templateUrl: './rog-console.component.html',
  styleUrls: ['./rog-console.component.css']
})
export class RogConsoleComponent implements OnInit {
  public enemy_name = '';
  public win_state = {
    win: true,
    win_sd: false,
    win_plus5: false,
    loss: false,
    loss_sd: false,
  }
  public disable_buttons = false;
  public secret1 = '';
  public secret2 = '';
  public access_granted = false;


  constructor(private updaterService: UpdaterService) { }

  ngOnInit() {
  }

  refactor(key: string) {
    for (var state in this.win_state) {
      this.win_state[state] = false;
    }
    this.win_state[key] = true;
    console.log(key, this.win_state);
  }

  onSubmit() {
    var result;
    if (this.win_state.win || this.win_state.win_sd || this.win_state.win_plus5) {
      result = this.updaterService.sendUpdate(this.enemy_name, 1, 0, this.win_state.win_sd ? 1 : 0, this.win_state.win_plus5 ? 1 : 0)
        .subscribe(value => console.log(value));
    }
    else {
      result = this.updaterService.sendUpdate(this.enemy_name, 0, 1, this.win_state.loss_sd ? 1 : 0, 0)
        .subscribe(value => console.log(value));
    }
    this.temp_disable();
  }

  onClickUpdateCurrentEnemy() {
    var result = this.updaterService.sendUpdateCurrentEnemy(this.enemy_name)
      .subscribe(value => console.log('finished updating current enemy', value));
    this.temp_disable();
  }

  sendSecret() {
    var result = this.updaterService.sendSecret(this.secret1, this.secret2)
      .subscribe(value => {
        console.log('response from server: ', value);
        if ((value as any).message === 'access granted') { this.access_granted = true }
      });
    this.temp_disable();
  }

  temp_disable() {
    this.disable_buttons = true;
    setTimeout(
      () => { this.disable_buttons = false },
      3000
    )
  }
}
