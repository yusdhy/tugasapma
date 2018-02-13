import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ScorePage } from '../score/score';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  protected createSuccess = false;
  public data = { player_one: '', player_two: ''};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  register_form(){
    if(this.data.player_one === ""){
      this.showPopup("Oops", "Player 1 harus diisi.");
      return false;
    }
    if(this.data.player_two === ""){
      this.showPopup("Oops", "Player 2 harus diisi.");
      return false;
    }

    localStorage.setItem('register', JSON.stringify(this.data));

    this.navCtrl.push(ScorePage);
    return false;
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
